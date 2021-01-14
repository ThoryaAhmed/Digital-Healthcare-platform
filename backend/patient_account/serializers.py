from rest_framework import serializers
from .models import Patientprofile
from django.contrib.auth.models import User

class PatientSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patientprofile
        fields = ('medical_history','gender')

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'email','username')

class UsersLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'email')


class MyProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patientprofile
        fields = ('email', 'username','medical_history','gender')

