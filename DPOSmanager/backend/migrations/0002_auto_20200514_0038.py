# Generated by Django 3.0.6 on 2020-05-14 07:38

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='products_model',
            name='image',
            field=models.CharField(blank=True, max_length=100, unique=True),
        ),
        migrations.AddField(
            model_name='products_model',
            name='price',
            field=models.CharField(default=django.utils.timezone.now, max_length=100, unique=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='products_model',
            name='quantity',
            field=models.IntegerField(),
        ),
    ]
