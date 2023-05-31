# Generated by Django 4.2.1 on 2023-05-30 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_interface', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='improvementhistory',
            name='history_improvment_type',
            field=models.CharField(choices=[('improve', 'Please improve the text below.'), ('correct', 'Please correct the text below.'), ('shorter', 'Please shorten the text below.'), ('longer', 'Please lengthen the text below.'), ('summarize', 'Please summarize the text below.'), ('capitalize', 'Please capitalize the text below.'), ('improve_code', 'Please improve the code below.'), ('minify', 'Please minify the code below.'), ('beautify', 'Please beautify the code below.'), ('compress', 'Please compress the code below.'), ('decompress', 'Please decompress the code below.')], default=1, max_length=20, verbose_name='Improvement type'),
            preserve_default=False,
        ),
    ]