from django.urls import path
import todoFrontend.views as views

# All urls will point to same HTML template because it is SPA application
app_name = "frontend"
urlpatterns = [
    path('', views.index, name='index'),
]
