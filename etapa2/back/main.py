import pandas as pd
from typing import Optional
from fastapi import FastAPI
from joblib import load
from DataModel import DataModel
from PredictionModel import Model

import Pipeline
from Pipeline import TextTransformer

app = FastAPI()
 
@app.get("/")
def read_root():
   return {"Hello": "World"}

@app.post("/predict")
def make_predictions(dataModel: DataModel):
    texto = dataModel.dict()['text']
    df = pd.DataFrame([texto], columns=['Textos_espanol'])
    model = load("modeloCNB.joblib")
    result = model.predict(df['Textos_espanol'])[0]
    print(result)
    return result
