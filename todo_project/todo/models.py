from django.db import models

class Ukol(models.Model):
    nazev = models.CharField(max_length=255)
    popis = models.CharField(max_length=255)
    splneno = models.BooleanField(default=False)

    def __str__(self):
        return self.nazev, self.popis

