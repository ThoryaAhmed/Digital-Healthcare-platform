from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ServiceSerializer
from .models import Service
from django.shortcuts import render, get_object_or_404


class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all().order_by('service_type')
    serializer_class = ServiceSerializer


     

     



   
  


    

  