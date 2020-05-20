from backend.models  import Employees_model, Products_model, Transactions_model, Cart_model
from rest_framework import viewsets, permissions
from .serializers import EmployeesSerializer, ProductsSerializer, TransactionsSerializer, CartSerializer



class EmployeesViewSet(viewsets.ModelViewSet):
    queryset = Employees_model.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = EmployeesSerializer


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products_model.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = ProductsSerializer
    



class TransactionsViewSet(viewsets.ModelViewSet):
    queryset = Transactions_model.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = TransactionsSerializer



class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart_model.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = CartSerializer


