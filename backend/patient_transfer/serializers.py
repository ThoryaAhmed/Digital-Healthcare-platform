from rest_framework import serializers
from .models import Patient_Transfer

class Patient_TransferSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Patient_Transfer
        fields = ('content')




