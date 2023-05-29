from django.shortcuts import render
from django.http import (
    HttpRequest,
    HttpResponse,
)

from .editor_view import EditorView


class CodeView(EditorView):
    """Code view."""

    def get(self, request: HttpRequest) -> HttpResponse:
        """GET request handler."""
        return render(request, "editor.html", {"type": "code"})
