from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils.text import slugify
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Doctorprofile(models.Model):
    user = models.OneToOneField(User , verbose_name=_("user"), on_delete=models.CASCADE)
    email = models.CharField(max_length=255)
    username = models.CharField(max_length=100)
    area = models.CharField(max_length=200)
    Department = models.CharField(max_length=200)
    fees = models.TextField(max_length=4000)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES,default='M')

    def __str__(self):
        return self.user.username

    @receiver(post_save, sender=User)
    def create_profile(sender, instance, created, **kwargs):
        if created:
            Doctorprofile.objects.create(user=instance)
        instance.doctorprofile.save()
