# Generated by Django 3.0.6 on 2020-05-16 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20200514_0227'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products_model',
            name='image',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='products_model',
            name='name',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='products_model',
            name='price',
            field=models.CharField(max_length=100),
        ),
    ]
