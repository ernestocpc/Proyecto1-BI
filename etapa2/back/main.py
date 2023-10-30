import pandas as pd
import logging
from typing import Optional
from fastapi import FastAPI
from joblib import load
from DataModel import DataModel
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from math import exp

logging.basicConfig(filename='log.csv', level=logging.INFO, format='%(asctime)s - %(message)s', datefmt='%Y-%m-%d %H:%M:%S')

modeloCNB = load("modeloCNB.joblib")
modeloSDG = load("modeloSDG.joblib")
modeloRFC = load("modeloRFC.joblib")

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST", "GET"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
   return {"Hello": "World"}

@app.post("/predict")
def make_predictions(dataModel: DataModel):
    texto = dataModel.dict()['text']
    algoritmo = dataModel.dict()['algorithm']

    model = None
    if algoritmo == 'cnb':
        model = modeloCNB
    elif algoritmo == 'sdg':
        model = modeloSDG
    else:
        model = modeloRFC

    df = pd.DataFrame([texto], columns=['Textos_espanol'])
    result = model.predict(df['Textos_espanol'])[0]

    probabilidades = []
    if algoritmo == 'sdg':
        scores = []
        scores = model.decision_function(df['Textos_espanol'])[0]
        for score in scores:
            probabilidad = 1 / (1 + exp(-score))
            probabilidades.append(probabilidad) # Probabilidades: [6, 7, 16]
    else:
        probabilidades = model.predict_proba(df['Textos_espanol'])[0] # Probabilidades: [6, 7, 16]

    jsonResultadoYProbabilidades = {
        "resultado": int(result),
        "probabilidades": {
            "6": float(probabilidades[0]),
            "7": float(probabilidades[1]),
            "16": float(probabilidades[2])
        }
    }

    # Log de registro donde se guarda el id, fecha, clasificador, texto (input), resultado (output)
    id = 0
    with open('log.csv', 'r', encoding='utf-8') as f:
        for line in f:
            id += 1
    with open('log.csv', 'a', encoding='utf-8') as f:
        f.write(f'{id};{datetime.now().strftime("%Y-%m-%d %H:%M:%S")};{algoritmo};{texto};{result}\n')
    return jsonResultadoYProbabilidades

@app.post("/predict-list")
def make_predictions_list(dataModel: DataModel):
    # recieved_data = {text: '', algorithm: '', file: File}
    algoritmo = dataModel.dict()['algorithm']
    file = dataModel.dict()['file']
    df = pd.read_csv(file.file)

    # se llama a la funcion make_predictions para cada texto
    resultados = []
    for texto in df['Textos_espanol']:
        dataModel.text = texto
        resultados.append(make_predictions(dataModel))   
     



@app.get("/log")
def get_log():
    log = []
    with open('log.csv', 'r', encoding='utf-8') as f:
        f.readline()
        for line in f:
            linea = line.replace('\n', '')
            linea = linea.split(';')
            log.append({
                "id": linea[0],
                "fecha": linea[1],
                "clasificador": linea[2],
                "texto": linea[3],
                "resultado": linea[4]
            })
    return log