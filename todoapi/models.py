from django.db import models

# Create your models here.

class Todo(models.Model):
    description = models.CharField(max_length=256, null=True, blank=False)
    completed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f'{self.description}'

    class Meta:
        db_table = 'todos'
