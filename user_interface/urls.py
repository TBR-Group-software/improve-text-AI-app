from django.urls import path

from .views.index_view import IndexView

urlpatterns = [
    path("", IndexView.as_view()),
]
