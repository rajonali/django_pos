from rest_framework import serializers
from backend.models import Employees_model, Products_model, Transactions_model, Cart_model, User_model


#App1 serializer

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees_model
        fields =  '__all__'

class ProductsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products_model
        fields =  '__all__'

class TransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions_model
        fields =  '__all__'

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart_model
        fields =  '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User_model
        fields =  '__all__'
