# Generated by Django 4.2.1 on 2023-05-30 11:00

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('user_interface', '0002_improvementhistory_history_improvment_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='improvementhistory',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='Created at'),
            preserve_default=False,
        ),
    ]
