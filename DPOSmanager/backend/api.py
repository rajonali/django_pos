from backend.models  import Backend_model, Employees_model, Products_model
from rest_framework import viewsets, permissions
from .serializers import BackendSerializer, EmployeesSerializer, ProductsSerializer


class BackendViewSet(viewsets.ModelViewSet):
    queryset = Backend_model.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = BackendSerializer

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