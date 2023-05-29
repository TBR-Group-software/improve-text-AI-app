from django.contrib import messages
from django.contrib.auth import login
from django.http import HttpRequest, HttpResponse
from django.shortcuts import redirect, render

from account.forms import UserLoginForm


def user_login_view(request: HttpRequest) -> HttpResponse:
    """User login view."""
    if request.user.is_authenticated:
        messages.success(request, "You already log in.")
        return redirect("user_interface:text")
    if request.method == "POST":
        form = UserLoginForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            messages.success(request, "You have singed up successfully.")
            redirect_to = request.GET.get("redirect_to", "")
            if redirect_to != "":
                return redirect(redirect_to)
            else:
                return redirect("user_interface:text")
        else:
            messages.error(request, "Please enter a correct email and password!")
    else:
        form = UserLoginForm()
    return render(request, "login.html", {"form": form})
