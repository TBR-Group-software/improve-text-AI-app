from django.urls import path

from .views import improve_text_view, CodeView, TextView, index_view, get_history_view


urlpatterns = [
    path("", index_view, name="index"),
    path("text/", TextView.as_view(), name="text"),
    path("code/", CodeView.as_view(), name="code"),
    path("improve_text/", improve_text_view, name="improve_text"),
    path("get_history/", get_history_view, name="get_history"),
]
