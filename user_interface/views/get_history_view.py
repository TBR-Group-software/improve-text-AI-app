import json

from django.http import HttpRequest, JsonResponse
from django.contrib.auth.decorators import login_required

from user_interface.models import ImprovementHistory


@login_required(login_url="login")
def get_history_view(request: HttpRequest) -> JsonResponse:
    """
    Get history view for improvement history.

    Returns ImprovementHistory objects filtered by type and user.
    """
    request_data = json.loads(request.body)
    improvement_type = request_data.get("type")

    if improvement_type:
        histories = ImprovementHistory.objects.filter(
            user=request.user, history_type=improvement_type
        ).values("history_improvement_type", "text", "response_text", "created_at")
        return JsonResponse({"histories": list(histories)})
    else:
        return JsonResponse({"error": "No improvement type provided"}, status=400)
