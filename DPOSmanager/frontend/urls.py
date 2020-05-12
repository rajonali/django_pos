from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('dashboard', views.dashboard),
    path('products', views.products),
    path('transactions', views.transactions),
    path('metrics', views.metrics),
    path('settings', views.settings),
    
]