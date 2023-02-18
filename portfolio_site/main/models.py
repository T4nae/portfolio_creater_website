from django.db import models
from django.conf import settings


class Portfolio(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
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
