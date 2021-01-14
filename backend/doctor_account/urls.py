from django.urls import path,include
from . import views
from django.contrib.auth import views as auth_views
from rest_framework import routers

router=routers.DefaultRouter()


urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/DoctorSignUp/',views.DoctorEmailSignUpView.as_view(),name='DoctorSignUp'),
    path('api/DoctorSignIn/',views.DoctorEmailSignInView.as_view(),name='DoctorSignIn'),
    path('api/Doctorprofiles/',views.Doctors_List,name='Doctorprofiles'),
    path('api/MyProfile/', views.MyProfile, name='Myprofile'),
]

