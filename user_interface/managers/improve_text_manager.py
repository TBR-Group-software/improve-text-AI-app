from user_interface.managers import OpenAiApiManager


class ImproveTextManager:
    """Manager for improving text using OpenAI API."""

    INSTRUCTIONS_MAP = {
        "improve": "Please improve the text below.",
        "correct": "Please correct the text below.",
        "shorter": "Please shorten the text below.",
        "longer": "Please lengthen the text below.",
        "summarize": "Please summarize the text below.",
        "capitalize": "Please capitalize the text below.",
        "improve_code": "Please improve the code below.",
        "minify": "Please minify the code below.",
        "beautify": "Please beautify the code below.",
        "compress": "Please compress the code below.",
        "decompress": "Please decompress the code below.",
    }

    def improve_text(self, text: str, improvement_type: str) -> str:
        """Improve the given text based on the specified improvement type."""
        openai_manager: OpenAiApiManager = OpenAiApiManager()
        instruction_prompt: str = self.INSTRUCTIONS_MAP.get(improvement_type, "")
        return openai_manager.send_api_request(text, instruction_prompt)
