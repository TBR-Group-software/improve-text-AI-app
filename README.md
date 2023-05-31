# Improve text/code AI

The goal of this project is to provide a user-friendly interface for editing and modifying text and code using ChatGPT. This project is built using the Django framework and several other libraries.

<p float="center", align="justify">
  <img src="https://github.com/TBR-Group-software/improve-text-AI-app/blob/main/images/mob%201.gif" width="250" />

  <img src="https://github.com/TBR-Group-software/improve-text-AI-app/blob/main/images/mob%202.gif" width="250" />
     
  <img src="https://github.com/TBR-Group-software/improve-text-AI-app/blob/main/images/mob%203.gif" width="250" />
</p>
<p>
  <img src="https://github.com/TBR-Group-software/improve-text-AI-app/blob/main/images/desk_improve_ai.gif" width="750" />
</p>


## Features

- Responsive design for all types of devices (mobile, tablet, desktop) using Bootstrap 5
- Improve text/code using ChatGPT
- Summarize/correct grammar or perform other operations using ChatGPT
- Minify/beautify or perform other operations using ChatGPT
- User registration and login functionality
- History of operations
- Docker support for easy deployment

## Built with

- [Django](https://www.djangoproject.com/) - Backend server-side web framework
- [Celery](https://docs.celeryq.dev/en/stable/) - Simple, flexible, and reliable distributed system for processing messages
- [Daphne](https://github.com/django/daphne/) - HTTP, HTTP2, and WebSocket protocol server for ASGI and ASGI-HTTP, used to power Django Channels
- [Visual Studio Code](https://code.visualstudio.com/) - Code editing environment
- [pre-commit](https://pre-commit.com/) - Framework for managing and maintaining multi-language pre-commit hooks
- [black](https://github.com/psf/black) - Python code formatter
- [Flake8](https://github.com/pycqa/flake8) - Python tool for checking code style and quality
- [Bootstrap 5](https://getbootstrap.com/) - Frontend toolkit for building responsive designs
- [Sass](https://sass-lang.com/) - CSS preprocessor language
- [JavaScript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) - Programming language for enhancing interactivity on the web
- [Docker](https://www.docker.com/) - Platform for delivering software in containers
- [Nginx](https://www.nginx.com/) - Web server and reverse proxy
- [PostgreSQL](https://www.postgresql.org/) - Relational database management system
- [OpenAIAPI](https://beta.openai.com/) - API for accessing new AI models developed by OpenAI

## Build

**Step 1:**
Download or clone this repository using the following link:

```
https://github.com/TBR-Group-software/improve-text-AI-app.git
```

**Step 2:**
Create a `.env` file in the root folder and specify the following values:

```
POSTGRES_DB='XXX'
POSTGRES_USER='XXX

POSTGRES_PASSWORD='XXX'
POSTGRES_HOST='localhost'
POSTGRES_PORT=5432

DJANGO_DEBUG=True/False
DJANGO_ALLOWED_HOSTS='*'
DJANGO_SECRET_KEY='XXX'

OPENAI_API_KEY='sk-XXX'
OPENAI_ENGINE='gpt-3.5-turbo' # or another engine
```

**Step 3:**
#### If you want to launch with Docker:

```
docker-compose up --build
```

The Improve text/code AI project is now available at http://127.0.0.1/.

#### Launch without Docker:

**Step 1:**
Create and activate a Python virtual environment:

```
python3 -m venv env
. env/bin/activate
```

**Step 2:**
Install the dependencies listed in `requirements-dev.txt`:

```
pip3 install -r requirements-dev.txt
```

**Step 3:**
Run PostgreSQL.

**Step 4:**
Apply Django database migrations:

```
python3 manage.py migrate
```

**Step 5:**
Run the Django server:

```
python3 manage.py runserver
```

The Improve text/code AI project is now available at http://127.0.0.1:8000/.

## License
This project is licensed under the GNU GPL v3 License. See the [LICENSE.md](https://github.com/TBR-Group-software/improve-text-AI-app/blob/main/LICENSE) file for details.
