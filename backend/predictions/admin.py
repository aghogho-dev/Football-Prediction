from django.contrib import admin

# Register your models here.
from .models import FootballPrediction

@admin.register(FootballPrediction)
class FootballPredictionAdmin(admin.ModelAdmin):
    list_display = ('home_team', 'away_team', 'predict', 'proba_away_win', 'proba_draw', 'proba_home_win')
    search_fields = ('home_team', 'away_team', 'predict')