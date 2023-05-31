from django.contrib import admin
from user_interface.models import ImprovementHistory


@admin.register(ImprovementHistory)
class ImprovementHistoryAdmin(admin.ModelAdmin):
    """Admin class for improving history."""

    list_display = ("user", "history_type", "created_at")
    list_filter = ("user", "history_type")
    search_fields = ("user__username", "history_type", "text", "response_text")
