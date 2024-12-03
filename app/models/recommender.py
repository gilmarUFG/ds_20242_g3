import logging
import numpy as np
import pandas as pd
from tensorflow.keras.models import load_model
from typing import List
import os
from numpy import genfromtxt
from collections import defaultdict
import csv
import json
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from .layers import L2Normalize

    

models = {
    "recUser": "./user_based.keras",
}

class Recommender:
    def __init__(self):
        self.data = []
        self.__models = {}
        self.scalerUser = StandardScaler()
        self.scalerItem = StandardScaler()
        self.scaler = MinMaxScaler((-1, 1))
        self.scaledata = True

        self.item_train, self.user_train, self.y_train, self.item_vecs, self.movie_dict, self.cos_sim_data = self.load_data()

        self.scalerItem.fit(self.item_train)
        self.scalerUser.fit(self.user_train)
        self.scaler.fit(self.y_train.reshape(-1, 1))
        
        for model_name, model_path in models.items():
            self.load_models(model_name, model_path)

    def get_pred_movies_json(self, y_p, user, item, movie_dict, top_k):
        """ Return results of prediction of a new user in JSON format. Inputs are expected
            to be in sorted order, unscaled. """
        count = 0
        movies_listed = defaultdict(int)
        results = []
        #print(item)
        for i in range(0, y_p.shape[0]):
            if count == top_k:
                break
            movie_id = int(item[i, 0])  # Garantir que seja do tipo int
            if movie_id in movies_listed:
                continue
            movies_listed[movie_id] = 1
            count += 1

            results.append({
                "tmdbId": movie_id
                #"y_p": float(y_p[i, 0]),  # Garantir que seja serializável
                #"title": movie_dict[movie_id]['title'],
                #"genres": movie_dict[movie_id]['genres']
            })

    # Encapsula o resultado dentro de "recommendations_users"
        return json.dumps(results, indent=4) 

        
    def load_data(self):
        item_train = genfromtxt('../data/scalers/content_item_train.csv', delimiter=',')
        user_train = genfromtxt('../data/scalers/content_user_train.csv', delimiter=',')
        y_train    = genfromtxt('../data/scalers/content_y_train.csv', delimiter=',')

        item_vecs = genfromtxt('../data/content_item_vecs_2.csv', delimiter=',')
        
        movie_dict = defaultdict(dict)
        count = 0
    #    with open('./data/movies.csv', newline='') as csvfile:
        with open('../data/content_movie_list_2.csv', newline='') as csvfile:
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

        self.movie_test = pd.read_csv('../data/content_movie_list_2.csv')

        self.indices = pd.Series(self.movie_test.index, index=self.movie_test['title'])
        
        cos_sim_data = pd.read_excel("../data/cos_sim.xlsx")

        #print("carreguei tudo!!!")

        return(item_train, user_train, y_train, item_vecs, movie_dict, cos_sim_data)

    def load_models(self, model_name: str, model_path: str):
        if model_name not in self.__models:
            try:
                if not os.path.exists(model_path):
                    raise FileNotFoundError(f"Arquivo do modelo não encontrado: {model_path}")
                
                self.model = load_model(model_path, custom_objects={"L2Normalize": L2Normalize})
                self.__models[model_name] = self.model
                #print(f"Modelo '{model_name}' carregado com sucesso.")
                #logging.info(f"Modelo '{model_name}' carregado com sucesso.")
            except Exception as e:
                #print(f"Erro ao carregar o modelo '{model_name}' a partir de {model_path}: {e}")
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
    def predict_uservec(self, user_vecs, item_vecs, scaler, ScalerUser, ScalerItem, scaledata=False):
        """ given a user vector, does the prediction on all movies in item_vecs returns
            an array predictions sorted by predicted rating,
            arrays of user and item, sorted by predicted rating sorting index
        """
        if scaledata:
            #print(f"user_vecs dentro de predict {user_vecs}")
            scaled_user_vecs = ScalerUser.transform(user_vecs)
            scaled_item_vecs = ScalerItem.transform(item_vecs)
            y_p = self.model.predict([scaled_user_vecs[:, 3:], scaled_item_vecs[:, 1:]])
            print(y_p)
        else:
            y_p = self.model.predict([user_vecs[:, 3:], item_vecs[:, 1:]])
        y_pu = scaler.inverse_transform(y_p)

        #if np.any(y_pu < 0) : 
        #    print("Error, expected all positive predictions")
        sorted_index = np.argsort(-y_pu,axis=0).reshape(-1).tolist()  #negate to get largest rating first
        sorted_ypu   = y_pu[sorted_index]
        sorted_items = item_vecs[sorted_index]
        sorted_user  = user_vecs[sorted_index]
        return(sorted_ypu, sorted_items, sorted_user)
    
    def recommend_user(self, user_vect, count) -> str:
        user_vec = self.gen_user_vecs(user_vect, len(self.item_vecs))
        sorted_ypu, sorted_items, sorted_user = self.predict_uservec(user_vec, self.item_vecs, scaler=self.scaler, ScalerUser=self.scalerUser, ScalerItem=self.scalerItem, scaledata=self.scaledata)                                              
        json_recommendation = self.get_pred_movies_json(sorted_ypu, sorted_user, sorted_items, self.movie_dict, count)

        return json_recommendation
    
    def recommend_content(self, query, count) -> str:
        print(f"query dentro de recommend_content: {query}")
        json_recommendation = self.get_query_recommendations(query, count)

        return json_recommendation

    
    def get_query_recommendations(self, title, N=30):
        idx = self.indices[title]
        
        sim_scores = list(enumerate(self.cos_sim_data[idx]))
        sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)
        sim_scores = sim_scores[0:N+1]  # seleciona os top-n (contabilizando o proprio filme, se nao alterar indices 1:N+1)
        
        movie_indices = [i[0] for i in sim_scores]
        
        sim_scores = pd.DataFrame(sim_scores, columns=['index', 'similarity_score'])
        final_data = self.movie_test.iloc[movie_indices]
        final_data = final_data.merge(sim_scores, left_index=True, right_on='index')
        
        final_data['similarity_score'] = round(final_data['similarity_score'] * 100, 2)
        del final_data['index']
        del final_data['title']
        del final_data['similarity_score']
        del final_data['genres']

        # df to json
        result_json = final_data.to_json(orient='records')
        
        return result_json
