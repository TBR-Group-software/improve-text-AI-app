import openai
import os

openai.api_key = os.environ.get("OPENAI_API_KEY")


class OpenAiApiManager:
    def send_api_request(self, text: str, instructions: str) -> str:
        """Send API request."""
        completion = openai.ChatCompletion.create(
            model=os.environ.get("OPENAI_ENGINE"),
            messages=[
                {
                    "role": "system",
                    "content": f"You are a grammar improvement AI. Please return only text/code. {instructions}",
                },
                {"role": "user", "content": text},
            ],
        )
        try:
            return completion["choices"][0]["message"]["content"]  # type: ignore
        except ValueError as e:
            raise ValueError(
                f"OpenAI API returned unexpected response. {completion} {e}"
            )
