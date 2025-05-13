from django.db import models

class Uzivatel(models.Model):
    jmeno = models.CharField(max_length=255)
    heslo = models.CharField(max_length=255)

    def __str__(self):
        return self.jmeno, self.heslo

class Ukol(models.Model):
    nazev = models.CharField(max_length=255)
    popis = models.CharField(max_length=255)
    splneno = models.BooleanField(default=False)

    def __str__(self):
        return self.nazev, self.popis
    
class Pocasi(models.Model):
    teplota = models.CharField(max_length=255)
    pocitova_teplota = models.CharField(max_length=255)
    stav_pocasi = models.CharField(max_length=255)

    def __str__(self):
        return self.teplota, self.pocitova_teplota, self.stav_pocasi