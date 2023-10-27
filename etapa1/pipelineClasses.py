from contexto.limpieza import limpieza_texto, lista_stopwords, remover_stopwords
from contexto.stemming import Stemmer, stem_texto
from contexto.vectorizacion import VectorizadorFrecuencias
from sklearn.base import BaseEstimator, TransformerMixin

"""
Limpieza de datos. La funcion limpieza_texto hace lo siguiente:
    - Pasar todo el texto a minúsculas
    - Quitar signos de puntuación
    - Quitar números (configurable): True
    - Quitar acentos (configurable). True

Luego, se remueven las stopwords del texto. Para esto, se utiliza la función remover_stopwords.
"""
class TextTransformer(BaseEstimator, TransformerMixin):

    def fit(self, X, y=None):
        self.stopwords = lista_stopwords()
        return self
    
    def transform(self, X):
        X = X.apply(lambda x: self.preprocess_text(x))
        return X
    
    def preprocess_text(self, texto):
        texto = limpieza_texto(texto=texto, quitar_numeros=True, quitar_acentos=True)
        texto = remover_stopwords(texto, self.stopwords)
        return texto

"""
Normalización de datos. Se utiliza la función stem_texto para realizar el stemming de los textos.
El Stemmer se inicializa antes con el objetivo de que no se cree uno nuevo por cada texto.
"""
class NormalizeTokens(BaseEstimator, TransformerMixin):

    def fit(self, X, y=None):
        self.stemmer = Stemmer(lenguaje='español')
        return self
    
    def transform(self, X):
        X = X.apply(lambda x: self.normalize_text(x))
        return X
    
    def normalize_text(self, texto):
        texto = stem_texto(texto=texto, stemmer=self.stemmer)
        return texto
    
"""
Vectorización de datos. Se utiliza la clase VectorizadorFrecuencias para realizar la vectorización de los textos.
Se crea un vectorizador antes con el objetivo de que no se cree uno nuevo por cada texto.
"""

class VectorizeTokens(BaseEstimator, TransformerMixin):

    def __init__(self, tipo_vec='bow'):
        self.tipo_vec = tipo_vec

    def fit(self, X, y=None):
        # Construcción del vectorizador usando X_train. Se hacer una lista, 
        # donde cada elemento es un string de la posicion Textos_espanol
        textos = [x for x in X]
        self.v_bow = VectorizadorFrecuencias(tipo=self.tipo_vec)
        self.v_bow.ajustar(textos)
        return self
    
    def transform(self, X):
        X = X.apply(lambda x: self.vectorize_text(x))
        X = X.values.tolist()
        return X
    
    def vectorize_text(self, texto):
        texto = self.v_bow.vectorizar(textos=texto, disperso=False)
        # Se convierte a array para que sea compatible con el resto de los pasos
        # v_bow.inversa(X_vector[0]). Retorna las palabras que corresponden a cada posición del vector
        texto = texto.ravel()
        return texto