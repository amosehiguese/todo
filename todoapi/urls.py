from django.urls import path
from . import views

urlpatterns = [
    path("todos/", views.TodoListCreateView.as_view(), name="todo-list"),
    path("todos/<int:pk>/", views.TodoRetrieveUpdateDestroy.as_view(), name="todo")
]
