from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import db
from dotenv import load_dotenv
import os

load_dotenv()


@api_view(["GET"])
def get_predictions(request, league):
    data = list(
        db[league]
        .find({}, {"_id": 0})
        .sort("_id", -1)
        .limit(15)
    )

    return Response(data)


