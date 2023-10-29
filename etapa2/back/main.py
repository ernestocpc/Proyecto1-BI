import pandas as pd
import logging
from typing import Optional
from fastapi import FastAPI
from joblib import load
from DataModel import DataModel
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

logging.basicConfig(filename='log.csv', level=logging.INFO, format='%(asctime)s - %(message)s', datefmt='%Y-%m-%d %H:%M:%S')
model = load("modeloCNB.joblib")
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
    df = pd.DataFrame([texto], columns=['Textos_espanol'])
    result = model.predict(df['Textos_espanol'])[0]
    probabilidades = model.predict_proba(df['Textos_espanol'])[0] # Probabilidades: [6, 7, 16]
    jsonResultadoYProbabilidades = {
        "resultado": int(result),
        "probabilidades": {
            "6": float(probabilidades[0]),
            "7": float(probabilidades[1]),
            "16": float(probabilidades[2])
        }
    }
    # Log de registro donde se guarda el id, fecha, texto (input) y resultado (output)
    id = 0
    with open('log.csv', 'r', encoding='utf-8') as f:
        for line in f:
            id += 1
    with open('log.csv', 'a', encoding='utf-8') as f:
        f.write(f'{id};{datetime.now().strftime("%Y-%m-%d %H:%M:%S")};{texto};{result}\n')
    return jsonResultadoYProbabilidades

@app.get("/log")
def get_log():
    log = []
    with open('log.csv', 'r', encoding='utf-8') as f:
        header = f.readline()
        for line in f:
            linea = line.replace('\n', '')
            linea = linea.split(';')
            log.append({
                "id": linea[0],
                "fecha": linea[1],
                "texto": linea[2],
                "resultado": linea[3]
            })
    return log