from django.urls import path

from .views import IndexView, improve_text_view

urlpatterns = [
    path("", IndexView.as_view(), name="index"),
    path("improve_text/", improve_text_view, name="improve_text"),
]
