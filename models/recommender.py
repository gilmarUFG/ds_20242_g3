import logging
import numpy as np
from tensorflow.keras.models import load_model
import tensorflow as tf
from typing import List
import os
from numpy import genfromtxt
from collections import defaultdict
import csv
import re
import json
from sklearn.preprocessing import StandardScaler, MinMaxScaler



class L2Normalize(tf.keras.layers.Layer):
    def __init__(self, axis=1, **kwargs):
        super(L2Normalize, self).__init__(**kwargs)
        self.axis = axis

    def call(self, inputs):
        return tf.linalg.l2_normalize(inputs, axis=self.axis)

    def get_config(self):
        config = super(L2Normalize, self).get_config()
        config.update({"axis": self.axis})
        return config

    @classmethod
    def from_config(cls, config):
        return cls(**config)
    

# logging.basicConfig(
#     level=logging.INFO,
#     format="%(asctime)s - %(levelname)s - %(message)s",
#     handlers=[
#         logging.StreamHandler(), 
#         logging.FileHandler("./logs/recommender.log", mode="a")
#     ]
# )

models = {
    "recUser": "./notebooks/best_model.keras",
}

class Recommender:
    def __init__(self):
        self.data = []
        self.__models = {}
        self.scalerUser = StandardScaler()
        self.scalerItem = StandardScaler()
        self.scaler = MinMaxScaler((-1, 1))
        self.scaledata = True

        self.item_vecs, self.movie_dict = self.load_data()
        for model_name, model_path in models.items():
            self.load_models(model_name, model_path)

    def get_pred_movies_json(y_p, user, item, movie_dict, top_k):
        """ Return results of prediction of a new user in JSON format. Inputs are expected
            to be in sorted order, unscaled. """
        count = 0
        movies_listed = defaultdict(int)
        results = []

        for i in range(0, y_p.shape[0]):
            if count == maxcount:
                break
            movie_id = item[i, 0].astype(int)
            if movie_id in movies_listed:
                continue
            movies_listed[movie_id] = 1
            count += 1
            
            results.append({
                "y_p": float(y_p[i, 0]),  # serialize
                "movie_id": movie_id,
                "rating_ave": float(item[i, 2]),
                "title": movie_dict[movie_id]['title'],
                "genres": movie_dict[movie_id]['genres']
            })

        return json.dumps(results, indent=4)

        
    def load_data(self):
        item_vecs = genfromtxt('./notebooks/data/content_item_vecs.csv', delimiter=',')
       
        movie_dict = defaultdict(dict)
        count = 0
    #    with open('./data/movies.csv', newline='') as csvfile:
        with open('./notebooks/data/content_movie_list.csv', newline='') as csvfile:
            reader = csv.reader(csvfile, delimiter=',', quotechar='"')
            for line in reader:
                if count == 0: 
                    count +=1  #skip header
                    #print(line) 
                else:
                    count +=1
                    movie_id = int(line[0])  
                    movie_dict[movie_id]["title"] = line[1]  
                    movie_dict[movie_id]["genres"] =line[2]  

        return(item_vecs, movie_dict)

    def load_models(self, model_name: str, model_path: str):
        if model_name not in self.__models:
            try:
                if not os.path.exists(model_path):
                    raise FileNotFoundError(f"Arquivo do modelo não encontrado: {model_path}")
                
                self.model = load_model(model_path, custom_objects={"L2Normalize": L2Normalize})
                self.__models[model_name] = self.model
                print(f"Modelo '{model_name}' carregado com sucesso.")
                #logging.info(f"Modelo '{model_name}' carregado com sucesso.")
            except Exception as e:
                print(f"Erro ao carregar o modelo '{model_name}' a partir de {model_path}: {e}")
                #logging.error(f"Erro ao carregar o modelo '{model_name}' a partir de {model_path}: {e}")
                raise  
        else:
            #logging.info(f"Modelo '{model_name}' já está carregado.")
            print((f"Modelo '{model_name}' já está carregado."))

    def gen_user_vecs(self, user_vec, num_items):
        """ given a user vector return:
            user predict maxtrix to match the size of item_vecs """
        user_vecs = np.tile(user_vec, (num_items, 1))
        return(user_vecs)
    
    # predict on  everything, filter on print/use
    def predict_uservec(self, user_vecs, item_vecs, model, u_s, i_s, scaler, ScalerUser, ScalerItem, scaledata=False):
        """ given a user vector, does the prediction on all movies in item_vecs returns
            an array predictions sorted by predicted rating,
            arrays of user and item, sorted by predicted rating sorting index
        """
        if scaledata:
            self.scalerUser.fit(user_vecs)
            self.scalerItem.fit(item_vecs)
            scaled_user_vecs = ScalerUser.transform(user_vecs)
            scaled_item_vecs = ScalerItem.transform(item_vecs)
            y_p = self.model.predict([scaled_user_vecs[:, u_s:], scaled_item_vecs[:, i_s:]])
        else:
            y_p = self.model.predict([user_vecs[:, u_s:], item_vecs[:, i_s:]])
        self.scaler.fit(y_p.reshape(-1, 1))
        y_pu = scaler.inverse_transform(y_p)

        if np.any(y_pu < 0) : 
            print("Error, expected all positive predictions")
        sorted_index = np.argsort(-y_pu,axis=0).reshape(-1).tolist()  #negate to get largest rating first
        sorted_ypu   = y_pu[sorted_index]
        sorted_items = item_vecs[sorted_index]
        sorted_user  = user_vecs[sorted_index]
        return(sorted_index, sorted_ypu, sorted_items, sorted_user)
    
    def recommend_user(self, user_vect, count: int = 10) -> str:
        self.user_vec = self.gen_user_vecs(user_vect, len(self.item_vecs))
        self.sorted_index, self.sorted_ypu, self.sorted_items, self.sorted_user = self.predict_uservec(self.user_vec, self.item_vecs, self.__models, u_s=3, i_s=1, scaler=self.scaler, ScalerUser=self.scalerUser, ScalerItem=self.scalerItem, scaledata=self.scaledata)                                                
        json_recommendation = self.get_pred_movies_json(self.sorted_ypu, self.sorted_user, self.sorted_items, self.movie_dict, top_k=10)

        return json_recommendation