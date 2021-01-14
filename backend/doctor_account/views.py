from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from .models import Doctorprofile
from django.views.generic import View
from django.http import JsonResponse
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Doctorprofile
from .serializers import DoctorSignUpSerializer,UsersSerializer,UsersLoginSerializer,DoctorprofileSerializer,MyProfileSerializer
from django.http import Http404
from django.conf import settings
from django.shortcuts import render,get_object_or_404
from rest_framework_jwt.settings import api_settings
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


class DoctorEmailSignUpView(APIView):

    def post(self, request):
        serializer = DoctorSignUpSerializer(data=request.data)
        userData = {
            "email" : request.data["email"],
            "password" : request.data["password"],
            "username" : request.data["username"]
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
                    user = User.objects.create_user(username=serializer2.validated_data["username"],email=serializer2.validated_data["email"],password=serializer2.validated_data["password"])
                    doctor = Doctorprofile.objects.create(
                            user=user,
                            area=serializer.validated_data["area"],
                            Department=serializer.validated_data["Department"],
                            fees=serializer.validated_data["fees"],
                             )
                    doctor.save()
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


class DoctorEmailSignInView(APIView):

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


class Doctors_List(viewsets.ModelViewSet):
    queryset = Doctorprofile.objects.all()
    serializer_class = DoctorprofileSerializer

class MyProfile(viewsets.ModelViewSet):
    queryset = Doctorprofile.objects.all()
    serializer_class = MyProfileSerializer
    permission_classes = (IsAuthenticated)
