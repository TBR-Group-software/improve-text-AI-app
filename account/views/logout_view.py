from django.contrib import messages
from django.contrib.auth import logout
from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect


def user_logout_view(request: HttpRequest) -> HttpResponse:
    """User logout view."""
    logout(request)
    messages.success(request, "You have been logged out.")
    return redirect("account:login")
