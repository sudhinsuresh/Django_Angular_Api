from django.shortcuts import render
from rest_framework import viewsets
from .models import Book
from .serializers import Bookserializers,Userserializer
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class bookview(viewsets.ModelViewSet):
    permission_classes=[AllowAny]
    queryset=Book.objects.all()
    serializer_class=Bookserializers

class users(viewsets.ModelViewSet):
    permission_classes=[AllowAny]
    queryset=User.objects.all()
    serializer_class=Userserializer

