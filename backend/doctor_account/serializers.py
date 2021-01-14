from rest_framework import serializers
from .models import Doctorprofile
from django.contrib.auth.models import User


class DoctorSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctorprofile
        fields = ('area','Department','fees','gender')


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'email','username')


class UsersLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password', 'email')


class DoctorprofileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Doctorprofile
        fields=('email','username','area','Department','fees','gender')


class MyProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=Doctorprofile
        fields=('email','username','area','Department','fees','gender')
