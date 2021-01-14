FROM nginx

WORKDIR ~/fronted/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./.web/  /usr/share/nginx/html/

EXPOSE 8000
