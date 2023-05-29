import json

from django.http import HttpRequest, JsonResponse
from django.contrib.auth.decorators import login_required

from user_interface.managers import ImproveTextManager


@login_required(redirect_field_name="redirect_to", login_url="login")
def improve_text_view(request: HttpRequest) -> JsonResponse:
    """Improve text view."""
    request_data = json.loads(request.body.decode("utf-8"))
    text = request_data.get("text")
    text_type = request_data.get("type")

    if text and text_type:
        improve_text_manager = ImproveTextManager()
        try:
            improved_text = improve_text_manager.improve_text(text, text_type)
            return JsonResponse({"text": improved_text})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"text": False})
