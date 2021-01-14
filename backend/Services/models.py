  
from django.db import models
from doctor_account.models import Doctorprofile
from patient_account.models import Patientprofile
from django.utils.translation import ugettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.text import slugify

class Service(models.Model):
    doctor_service = models.OneToOneField(Doctorprofile, on_delete=models.CASCADE)
    service_type = models.CharField(max_length=100, default='service')
    Fees = models.CharField(max_length=10)
    from_day = models.CharField(max_length=100)
    to_day = models.CharField(max_length=100)
    from_time = models.CharField(max_length=10)
    to_time = models.CharField(max_length=10)

    def __str__(self):
        return self.service_type

@receiver(post_save, sender=Doctorprofile)
def create_service(sender, instance, created, **kwargs):
    if created:
        Service.objects.create(Doctorprofile=instance)
    instance.service.save()






        





