from django.shortcuts import render, redirect, get_object_or_404
from .models import Ukol
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib import messages

@login_required
def index(request):
    nesplnene = Ukol.objects.filter(splneno=False)
    splnene = Ukol.objects.filter(splneno=True)
    return render(request, 'todo/index.html', {
        'nesplnene': nesplnene, 
        'splnene': splnene, 
        'pocet_nesplnenych': nesplnene.count(), 
        'pocet_splnenych': splnene.count()
        })

def registrace(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('index')
    else:
        form = UserCreationForm()
    return render(request, 'todo/registrace.html', {'form': form})

def pridat_ukol(request):
    if request.method == 'POST':
        nazev = request.POST.get('nazev')
        popis = request.POST.get('popis')
        if nazev:
            Ukol.objects.create(nazev=nazev, popis=popis)
    return redirect('index')

def splnit_ukol(request, id):
    ukol = get_object_or_404(Ukol, id=id)
    ukol.splneno = not ukol.splneno
    ukol.save()
    return redirect('index')

def upravit_ukol(request, id):
    ukol = get_object_or_404(Ukol, id=id)
    if request.method == 'POST':
        ukol.nazev = request.POST.get('nazev')
        ukol.popis = request.POST.get('popis')
        ukol.save()
        messages.success(request, 'Úkol byl úspěšně upraven.')
        return redirect('index')
    return render(request, 'todo/upravit.html', {'ukol': ukol})

def smazat_ukol(request, id):
    ukol = get_object_or_404(Ukol, id=id)
    ukol.delete()
    return redirect('index')

def pocasi(request):
    return render(request, 'todo/pocasi.html')
