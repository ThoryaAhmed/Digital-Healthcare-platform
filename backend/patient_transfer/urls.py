from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

router.register(r'content', views.Patient_TransferSerializer,basename='Patient_TransferViewSet')

urlpatterns = [

    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))

]