from django.db import models

# Create your models here.
class Book(models.Model):
    name=models.CharField(max_length=200)
    auther=models.CharField(max_length=200)
    price=models.CharField(max_length=10)

    def __str__(self):
        return self.name