from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
    first_name = models.CharField(max_length=50, blank=True)
    last_name =  models.CharField(max_length=50, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name']

    def get_full_name(self):
        return f'{self.first_name} {self.last_name}'

