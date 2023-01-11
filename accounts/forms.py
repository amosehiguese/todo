from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

User = get_user_model()

class UserRegisterForm(UserCreationForm):
    password1 = forms.CharField(widget=forms.PasswordInput, label="Password", help_text="Enter at least 8 characters")
    password2 = forms.CharField(widget=forms.PasswordInput, label="Re-enter password", help_text=False)

    email = forms.EmailField()

    class Meta:
        model=User
        fields = ['first_name', 'last_name', 'email', 'password1', 'password2']