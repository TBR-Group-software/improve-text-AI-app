from django.shortcuts import render
from django.views import View
from django.http import (
    HttpRequest,
    HttpResponse,
)


class IndexView(View):
    """Index view."""

    def get(self, request: HttpRequest) -> HttpResponse:
        """GET request handler."""
        return render(request, "index.html")
