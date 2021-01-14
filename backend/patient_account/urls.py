from django.urls import path,include
from . import views
from django.contrib.auth import views as auth_views
from rest_framework import routers

router=routers.DefaultRouter()

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/MyProfile/', views.MyProfile, name='Myprofile'),
    path('api/PatientSignUp/',views.PatientEmailSignUpView.as_view()),
    path('api/PatientSignIn/',views.PatientEmailSignInView.as_view()),
]

