from rest_framework import viewsets
from rest_framework import permissions
from .serializers import  AppointmentSerializer
from .models import  Appointment
from django.shortcuts import render, get_object_or_404





class AppointmentViewSet(viewsets.ModelViewSet):
    queryset = Appointment.objects.all().order_by('choose_service')
    serializer_class = AppointmentSerializer
    
    def cancelation(request, id, cancel):
        obj=Appointment.objects.get(appointment_id=id)
        if (cancel == True):
            obj.delete()
        else:
            obj.save()
        return render(request)

     

     



   
  


    

  