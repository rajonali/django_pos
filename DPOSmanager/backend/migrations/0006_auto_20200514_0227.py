# Generated by Django 3.0.6 on 2020-05-14 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_transactions_model'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transactions_model',
            name='product_array',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='transactions_model',
            name='tax',
            field=models.CharField(max_length=100),
        ),
    ]
