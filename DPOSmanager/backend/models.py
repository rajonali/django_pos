from django.db import models

# Create your models here.
class Backend_model(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

class Employees_model(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    pnum = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
class Products_model(models.Model):
    name = models.CharField(max_length=100, unique=True)
    quantity = models.IntegerField()
    sku = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    unit_price = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)



    
    

