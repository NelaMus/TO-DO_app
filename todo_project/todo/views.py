from django.shortcuts import render, redirect, get_object_or_404
from .models import Ukol

def index(request):
    ukoly = Ukol.objects.all()
    return render(request, 'todo/index.html', {'ukoly': ukoly})

def pridat_ukol(request):
    if request.method == 'POST':
        popis = request.POST.get('popis')
        if popis:
            Ukol.objects.create(popis=popis)
    return redirect('index')

def splnit_ukol(request, id):
    ukol = get_object_or_404(Ukol, id=id)
    ukol.splneno = True
    ukol.save()
    return redirect('index')

def smazat_ukol(request, id):
    ukol = get_object_or_404(Ukol, id=id)
    ukol.delete()
    return redirect('index')

