from django.db import models

# Create your models here.


class MyList(models.Model):
    subject = models.CharField(max_length=100, default="")

    def __str__(self):
        return self.subject
