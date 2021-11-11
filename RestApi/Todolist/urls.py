from django.urls import path
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('delItem/<int:pk>', views.delItem, name='delItem'),
]
