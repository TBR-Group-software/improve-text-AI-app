from django.shortcuts import render
from django.views import View
from django.http import (
    HttpRequest,
    HttpResponse,
)


class EditorView(View):
    """Editor view."""

    def get(self, request: HttpRequest) -> HttpResponse:
        """GET request handler."""
        return render(request, "editor.html")
