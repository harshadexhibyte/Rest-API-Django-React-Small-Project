
from django.shortcuts import render, redirect
from .models import MyList
from .serializers import MyListSerializer
from Todolist import serializers
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
# Create your views here.


def index(request):
    if request.method == 'POST':
        MyList.objects.create(subject=request.POST['subject'])
        mylist = MyList.objects.all().order_by('-id')
        return render(request, 'index.html', {'mylist': mylist})

    else:
        mylist = MyList.objects.all().order_by('-id')
        return render(request, 'index.html', {'mylist': mylist})


def delItem(request, pk):
    delitem = MyList.objects.get(id=pk).delete()
    mylist = MyList.objects.all().order_by('-id')
    return render(request, 'index.html', {'mylist': mylist})


def api(request):
    itm = MyList.objects.get(id=80)
    serializer = MyListSerializer(itm)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application/json')


def api_allData(request):
    itm = MyList.objects.all()
    serializer = MyListSerializer(itm, many=True)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application/json')
