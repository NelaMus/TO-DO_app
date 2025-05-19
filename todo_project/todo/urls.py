from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('pridat/', views.pridat_ukol, name='pridat_ukol'),
    path('splnit/<int:id>/', views.splnit_ukol, name='splnit_ukol'),
    path('upravit/<int:id>/', views.upravit_ukol, name='upravit_ukol'),
    path('smazat/<int:id>/', views.smazat_ukol, name='smazat_ukol'),
    path ('registrace/', views.registrace, name='registrace'),
]