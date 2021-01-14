from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import Patientprofile
from django.views.generic import View
from django.http import JsonResponse,HttpResponse
import requests
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Patientprofile
from .serializers import PatientSignUpSerializer,UsersSerializer,UsersLoginSerializer,MyProfileSerializer
from django.http import Http404
from django.conf import settings
from django.shortcuts import render,get_object_or_404
from rest_framework_jwt.settings import api_settings
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class PatientEmailSignUpView(APIView):

    def post(self, request):
        serializer = PatientSignUpSerializer(data=request.data)
        userData = {
            "email": request.data["email"],
            "password": request.data["password"],
            "username": request.data["username"]
        }
        serializer2 = UsersSerializer(data=userData)
        if serializer.is_valid() and serializer2.is_valid():
            try:
                serializer2.validated_data["email"]
                serializer2.validated_data["password"]

            except KeyError:
                return Response({"error": "Some data is missing"}, status=status.HTTP_400_BAD_REQUEST)
            try:
                User.objects.get(email=serializer2.validated_data["email"])
            except User.DoesNotExist:
                try:
                    user = User.objects.create_user(username=serializer2.validated_data["username"],
                                                    email=serializer2.validated_data["email"],
                                                    password=serializer2.validated_data["password"])
                    patient = Patientprofile.objects.create(
                        user=user,
                        medical_history=serializer.validated_data["medical_history"],
                    )
                    patient.save()
                except Exception as e:
                    return Response({"error": "Please try again later"}, status=status.HTTP_503_SERVICE_UNAVAILABLE)
                jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
                jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
                payload = jwt_payload_handler(user)
                token = jwt_encode_handler(payload)

                return Response({"token": token}, status=status.HTTP_201_CREATED)
            else:
                return Response({"error": "The Email Already Exists!"}, status=status.HTTP_401_UNAUTHORIZED)

        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PatientEmailSignInView(APIView):
    def post(self, request):
        serializer = UsersLoginSerializer(data=request.data)
        if serializer.is_valid():
            try:
                serializer.validated_data["email"]
                serializer.validated_data["password"]
            except KeyError:
                return Response({"error": "Some data is missing"}, status=status.HTTP_400_BAD_REQUEST)
            try:
                user = User.objects.get(email=serializer.validated_data["email"])
            except User.DoesNotExist:
                return Response({"Error": "Please Sign up first","error": "Email/Password is incorrect"}, status=status.HTTP_401_UNAUTHORIZED)
            else:
                if authenticate(username=user.username,password=serializer.validated_data["password"]):
                    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
                    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
                    payload = jwt_payload_handler(user)
                    token = jwt_encode_handler(payload)
                    return Response({"token": token}, status=status.HTTP_201_CREATED)
                else:
                    return Response({"Error": "Password provided is wrong","error": "Email/Password is incorrect"}, status=status.HTTP_401_UNAUTHORIZED)
        else:       
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MyProfile(viewsets.ModelViewSet):
    queryset = Patientprofile.objects.all()
    serializer_class = MyProfileSerializer
    permission_classes = (IsAuthenticated)
