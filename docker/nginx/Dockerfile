FROM nginx:1.23.4-alpine

WORKDIR /var/www/app

ADD docker/nginx/app.conf /etc/nginx/conf.d/default.conf

COPY /staticfiles /var/www/app/staticfiles

COPY /media /var/www/app/media
