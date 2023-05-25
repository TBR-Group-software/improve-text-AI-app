from user_interface.managers import OpenAiApiManager


class ImproveTextManager:
    def improve_text(self, text: str, type: str) -> str:
        """Improve text manager."""
        openai_manager = OpenAiApiManager()
        instructions = ""
        if type == "improve":
            instructions = "Please improve the text below."
        elif type == "correct":
            instructions = "Please correct the text below."
        elif type == "shorter":
            instructions = "Please shorten the text below."
        elif type == "longer":
            instructions = "Please lengthen the text below."

        return openai_manager.send_api_request(text, instructions)
