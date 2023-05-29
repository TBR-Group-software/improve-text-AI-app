from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class RegisterForm(UserCreationForm):
    """Register form."""

    email = forms.EmailField(
        label="",
        widget=forms.EmailInput(
            attrs={
                "class": "form-control input",
                "placeholder": "email",
                "type": "email",
            }
        ),
    )
    password1 = forms.CharField(
        label="",
        widget=forms.PasswordInput(
            attrs={"class": "form-control input", "placeholder": "password"}
        ),
    )
    password2 = forms.CharField(
        label="",
        widget=forms.PasswordInput(
            attrs={
                "class": "form-control input",
                "placeholder": "password confirmation",
            }
        ),
    )

    class Meta:
        """Meta."""

        model = User
        fields = ["email", "password1", "password2"]
