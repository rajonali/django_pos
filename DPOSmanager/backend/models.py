from django.db import models



class Employees_model(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique=True)
    pnum = models.CharField(max_length=500, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
class Products_model(models.Model):
    name = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    quantity = models.IntegerField()
    sku = models.CharField(max_length=100, unique=True)
    description = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    unit_price = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)


class Transactions_model(models.Model):
    product_array = models.CharField(max_length=100)
    total = models.IntegerField()
    tax = models.CharField(max_length=100)
    employee = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)


    
    

