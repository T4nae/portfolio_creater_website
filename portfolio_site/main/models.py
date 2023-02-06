from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username


class Portfolio(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    content = models.TextField()
    Class = models.CharField(max_length=50)
    style = models.CharField(max_length=50)

    def __str__(self):
        if self.title:
            return self.title
        else:
            return self.content
