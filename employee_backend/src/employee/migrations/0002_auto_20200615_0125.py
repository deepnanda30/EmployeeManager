# Generated by Django 3.0.7 on 2020-06-14 19:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='name',
            new_name='fname',
        ),
        migrations.AddField(
            model_name='employee',
            name='lname',
            field=models.CharField(default='', max_length=100),
        ),
    ]
