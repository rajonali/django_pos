from rest_framework import serializers
from app1.models import App1_model


#App1 serializer

class App1Serializer(serializers.ModelSerializer):
    class Meta:
        model = App1_model
        fields =  '__all__'