from django.db import models

class Ukol(models.Model):
    popis = models.CharField(max_length=255)
    splneno = models.BooleanField(default=False)

    def __str__(self):
        return self.popis

