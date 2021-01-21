FROM nginx

WORKDIR ~/fronted/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./storybook-static/  /usr/share/nginx/html/

EXPOSE 8000
