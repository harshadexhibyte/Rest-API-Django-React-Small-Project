
from django.contrib import admin
from django.urls import path, include
from Todolist import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('Todolist.urls')),
    path('api/', views.api),
    path('api_allData/', views.api_allData),
]
