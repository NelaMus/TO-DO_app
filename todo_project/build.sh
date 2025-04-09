#!/usr/bin/env bash
# build.sh

# Ukonči skript při chybě
set -o errexit

# Instalace závislostí
pip install -r requirements.txt

# Migrate databázi
python manage.py migrate
