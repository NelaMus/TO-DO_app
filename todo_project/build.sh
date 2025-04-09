#!/usr/bin/env bash
# Skript pro Render – vytvoří migrace a aplikuje je

python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
