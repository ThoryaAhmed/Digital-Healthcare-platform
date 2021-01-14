from rest_framework import serializers
from .models import payment

class paymentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = payment
        fields = ('operation')




