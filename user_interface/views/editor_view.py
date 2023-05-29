from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render
from django.views import View
from django.http import (
    HttpRequest,
    HttpResponse,
)


class EditorView(LoginRequiredMixin, View):
    """Editor view."""

    def get(self, request: HttpRequest) -> HttpResponse:
        """GET request handler."""
        return render(request, "editor.html")
