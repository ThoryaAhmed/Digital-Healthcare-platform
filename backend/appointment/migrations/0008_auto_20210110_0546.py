# Generated by Django 3.1.4 on 2021-01-10 03:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Services', '0007_auto_20210110_0404'),
    ]

    operations = [
        migrations.RenameField(
            model_name='appointment',
            old_name='cancelation',
            new_name='cancel',
        ),
    ]
