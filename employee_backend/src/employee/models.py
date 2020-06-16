from django.db import models

# Create your models here.
class Employee(models.Model):
    fname = models.CharField(max_length=100)
    lname = models.CharField(default='',max_length=100)
    email =  models.EmailField(max_length=100,unique=True)
    position = models.CharField(max_length=100)
    department= models.CharField(max_length=100)
    salary = models.CharField(max_length=10)
    dob = models.DateField(max_length=8)
    contact = models.CharField(max_length=10)
    joining_date = models.DateField(max_length=8)
