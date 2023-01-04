from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

# User=get_user_model()

class UserRegisterForm(UserCreationForm):
    class Meta:
        model=User
        fields = ['first_name', 'last_name', 'email', 'password1', 'password2']