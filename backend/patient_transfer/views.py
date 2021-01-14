from rest_framework import viewsets
from rest_framework import permissions
from .serializers import Patient_TransferSerializer
from .models import Patient_Transfer
from django.shortcuts import render, get_object_or_404

class Patient_TransferViewSet(viewsets.ModelViewSet):

    queryset = Patient_Transfer.objects.all()

    serializer_class = Patient_TransferSerializer