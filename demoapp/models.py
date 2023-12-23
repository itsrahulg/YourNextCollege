from django.db import models

# Create your models here.
class Details(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()

class EducationalInstitution(models.Model):
    sl_no = models.CharField(max_length=10)
    state_name = models.CharField(max_length=100)
    institution_name = models.CharField(max_length=200)
    institution_type = models.CharField(max_length=50)