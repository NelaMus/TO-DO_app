from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pridat/', views.pridat_ukol, name='pridat'),
    path('splnit/<int:id>/', views.splnit_ukol, name='splnit'),
    path('smazat/<int:id>/', views.smazat_ukol, name='smazat'),
]
