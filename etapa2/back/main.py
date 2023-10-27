import pandas as pd
from typing import Optional
from fastapi import FastAPI
from joblib import load
from DataModel import DataModel
from fastapi.middleware.cors import CORSMiddleware

model = load("modeloCNB.joblib")
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST"],
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
    return jsonResultadoYProbabilidades
