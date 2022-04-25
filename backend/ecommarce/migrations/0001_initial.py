# Generated by Django 3.2.7 on 2022-03-28 01:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('name', models.CharField(default='', max_length=100)),
                ('nick_name', models.CharField(default='', max_length=100, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True, verbose_name='email adress')),
                ('password', models.CharField(default='', max_length=22)),
                ('phone', models.IntegerField()),
                ('country', models.CharField(choices=[('eg', 'Egypt'), ('us', 'United state'), ('su', 'Saudi Arabia'), ('ue', 'Emarties')], max_length=16)),
                ('admin', models.BooleanField(blank=True, default=False)),
                ('customer', models.BooleanField(blank=True, default=False)),
            ],
        ),
    ]