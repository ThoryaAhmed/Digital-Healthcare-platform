from django.db import models

class payment(models.Model):
    operation = models.TextField()
    def check_valdity(operation):
        if len(operation) == 14:
            operation.save()
