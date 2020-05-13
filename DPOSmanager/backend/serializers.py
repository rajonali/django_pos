from rest_framework import serializers
from backend.models import Backend_model, Employees_model, Products_model


#App1 serializer

class BackendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Backend_model
        fields =  '__all__'

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees_model
        fields =  '__all__'

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products_model
        fields =  '__all__'