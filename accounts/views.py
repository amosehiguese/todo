from django.shortcuts import render, redirect
from .forms import UserRegisterForm

# Create your views here.

def register(request):
    if request.method == "POST":
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            first_name = form.cleaned_data.get('first_name')
            last_name = form.cleaned_data.get('last_name')
            email = form.cleaned_data.get('email')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'accounts/sign-up.html', {'form': form})

