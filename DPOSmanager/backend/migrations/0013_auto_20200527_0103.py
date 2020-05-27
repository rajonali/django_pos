# Generated by Django 3.0.6 on 2020-05-27 08:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0012_auto_20200519_1719'),
    ]

    operations = [
        migrations.CreateModel(
            name='User_model',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.TextField()),
                ('password', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='cart_model',
            name='price',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='transactions_model',
            name='products',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='transactions_model',
            name='total',
            field=models.CharField(max_length=100),
        ),
    ]
