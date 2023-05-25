import json

from django.http import HttpRequest, JsonResponse

from user_interface.managers import ImproveTextManager


def improve_text_view(request: HttpRequest) -> JsonResponse:
    """Improve text view."""
    request_data = json.loads(request.body.decode("utf-8"))
    text = request_data["text"]
    type = request_data["type"]

    if text:
        improve_text_manager = ImproveTextManager()
        improved_text = improve_text_manager.improve_text(text, type)
        return JsonResponse({"text": improved_text})

    return JsonResponse({"text": False})
