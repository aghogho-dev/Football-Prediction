# from django.db import models

# Create your models here.
import os
from pymongo import MongoClient
from djongo import models
from dotenv import load_dotenv

load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))
db = client[os.getenv("DB_NAME")]

class FootballPrediction(models.Model):
    home_team = models.CharField(max_length=100)
    away_team = models.CharField(max_length=100)
    predict = models.CharField(max_length=20)
    proba_away_win = models.FloatField(max_length=3)
    proba_draw = models.FloatField(max_length=3)
    proba_home_win = models.FloatField(max_length=3)
    

    def __str__(self):
        return f"{self.home_team}({self.proba_away_win}) Draw({self.proba_draw}) {self.away_team}({self.predict}) - {self.predict}"
