# Generated by Django 3.2.7 on 2022-04-19 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ecommarce', '0012_alter_users_phone'),
    ]

    operations = [
        migrations.CreateModel(
            name='Categorize',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False)),
                ('Item', models.CharField(default='', max_length=200)),
            ],
        ),
        migrations.AddField(
            model_name='products',
            name='product_categorize_two',
            field=models.ManyToManyField(related_name='catigo', to='ecommarce.Categorize'),
        ),
    ]
