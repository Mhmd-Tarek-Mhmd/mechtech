# Generated by Django 3.2.7 on 2022-03-29 03:36

from django.db import migrations, models
import ecommarce.models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommarce', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='img',
            field=models.ImageField(blank=True, default='', null=True, upload_to=ecommarce.models.upload_path),
        ),
    ]