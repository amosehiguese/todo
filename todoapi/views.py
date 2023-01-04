from rest_framework import generics

from .models import Todo

from .serializers import TodoSerializer

# Create your views here.

class TodoListCreateView(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer



