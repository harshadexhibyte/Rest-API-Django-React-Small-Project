from rest_framework import serializers


class MyListSerializer(serializers.Serializer):
    subject = serializers.CharField(max_length=100, default="")
