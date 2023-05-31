from django.db import models
from django.contrib.auth.models import User

from user_interface.constants import INSTRUCTIONS_TYPES, USER_HISTORY_TYPES


class ImprovementHistory(models.Model):
    """Improvement history model."""

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="improvement_history",
        related_query_name="improvement_histories",
        verbose_name="User",
    )
    history_type = models.CharField(
        max_length=20, verbose_name="Type", choices=USER_HISTORY_TYPES
    )
    history_improvement_type = models.CharField(
        max_length=20, verbose_name="Improvement type", choices=INSTRUCTIONS_TYPES
    )
    text = models.TextField(verbose_name="Text")
    response_text = models.TextField(verbose_name="response text")
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="Created at", editable=False
    )

    def __str__(self) -> str:
        """Return string representation of the model."""
        return f"{self.user} - {self.history_type}"

    class Meta:
        """Meta class for ImprovementHistory model."""

        verbose_name = "Improvement history"
        verbose_name_plural = "Improvement histories"
        ordering = ("-id",)
