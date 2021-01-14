from rest_framework import serializers

from .models import  Appointment





class AppointmentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Appointment
        fields = ('day', 'from_time', 'to_time', 'choose_service', 'cancel')
     