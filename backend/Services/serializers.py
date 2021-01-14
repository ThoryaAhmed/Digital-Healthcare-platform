from rest_framework import serializers

from .models import Service


class ServiceSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Service
        fields = ('service_type', 'Fees', 'from_day', 'to_day', 'from_time', 'to_time')

