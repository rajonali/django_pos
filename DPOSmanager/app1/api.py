from app1.models  import App1_model
from rest_framework import viewsets, permissions
from .serializers import App1Serializer

#App1 Viewset

class App1ViewSet(viewsets.ModelViewSet):
    queryset = App1_model.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = App1Serializer