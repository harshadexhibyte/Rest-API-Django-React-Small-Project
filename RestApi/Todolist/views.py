
from django.shortcuts import render, redirect
from .models import MyList
from .serializers import MyListSerializer
from Todolist import serializers
from rest_framework.renderers import JSONRenderer
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
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
    itm = MyList.objects.get(id=110)
    serializer = MyListSerializer(itm)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application/json')


def api_allData(request):
    itm = MyList.objects.all().order_by('-id')
    serializer = MyListSerializer(itm, many=True)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application/json')


def api_delData(request, pk):
    delitem = MyList.objects.get(id=pk).delete()
    mylist = MyList.objects.all().order_by('-id')
    serializer = MyListSerializer(mylist, many=True)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application/json')


@csrf_exempt
def api_insertData(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        MyList.objects.create(subject=data)
        return HttpResponse('Success')
    else:
        return HttpResponse("GET REQUEST NOT ALLOW")


def api_updateItem(request, pk):
    updateitem = MyList.objects.get(id=pk)
    serializer = MyListSerializer(updateitem)
    json_data = JSONRenderer().render(serializer.data)
    return HttpResponse(json_data, content_type='application/json')
