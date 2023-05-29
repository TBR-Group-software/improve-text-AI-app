from django.urls import path

from .views import improve_text_view, CodeView, TextView

urlpatterns = [
    path("", TextView.as_view(), name="text"),
    path("code/", CodeView.as_view(), name="code"),
    path("improve_text/", improve_text_view, name="improve_text"),
]
