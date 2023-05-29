from django.contrib import messages
from django.contrib.auth import login
from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect, render

from account.forms import RegisterForm


def user_register_view(request: HttpRequest) -> HttpResponse:
    """User register view."""
    if request.user.is_authenticated:
        messages.success(request, "You already registered.")
        return redirect("user_interface:text")

    if request.method == "GET":
        form = RegisterForm()
        return render(request, "register.html", {"form": form})

    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.email.lower()
            user.save()
            messages.success(request, "You have singed up successfully.")
            login(request, user)
            return redirect("user_interface:text")
        else:
            return render(request, "register.html", {"form": form})

    return redirect("user_interface:text")
