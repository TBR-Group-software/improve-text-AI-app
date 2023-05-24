import openai
import os

openai.api_key = os.environ.get("OPENAI_API_KEY")


class OpenAiApiManager:
    def send_api_request(self, prompt: str, instructions: str) -> str:
        completion = openai.ChatCompletion.create(
            model=os.environ.get("OPENAI_ENGINE"),
            messages=[
                {
                    "role": "system",
                    "content": f"You are a grammar improvement AI. {instructions}",
                },
                {"role": "user", "content": prompt},
            ],
        )
        if type(completion) == dict:
            return completion['choices'][0]['message']['content']
        
        raise Exception(f"OpenAI API returned unexpected response. {completion}")
