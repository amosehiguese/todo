from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

# User=get_user_model()

class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model=User
        fields = ['email','first_name', 'last_name', 'password1', 'password2']