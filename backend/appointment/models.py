  
from django.db import models
from doctor_account.models import Doctorprofile
from patient_account.models import Patientprofile
from django.utils.translation import ugettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.text import slugify



class Appointment(models.Model):
    patient_appointment = models.ForeignKey(Patientprofile, on_delete=models.CASCADE)
    day = models.CharField(max_length=100)
    from_time = models.CharField(max_length=10)
    to_time = models.CharField(max_length=10)
    choose_service = models.ForeignKey(Service, on_delete=models.CASCADE)
    cancel = models.BooleanField(default=False)

@receiver(post_save, sender=Patientprofile)
def create_service(sender, instance, created, **kwargs):
    if created:
        Appointment.objects.create(Patientprofile=instance)
    instance.appointment.save()


        





