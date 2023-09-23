from rest_framework import serializers
from .models import Book
from django.contrib.auth.models import User

class Bookserializers(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields=[
            'id',
            'name',
            'auther',
            'price'
        ]


class Userserializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    def create(self,validated_data):
        user =User.objects.create(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


    class Meta:
        model=User
        fields=[
            'username',
            'password'
        ]