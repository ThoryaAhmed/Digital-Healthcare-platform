from rest_framework import viewsets
from rest_framework import permissions
from .serializers import paymentSerializer
from .models import payment
from django.shortcuts import render, get_object_or_404

class paymentViewSet(viewsets.ModelViewSet):
    queryset = payment.objects.all()
    serializer_class = paymentSerializer