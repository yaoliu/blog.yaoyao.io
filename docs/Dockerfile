FROM nginx:alpine
LABEL maintainer="YaoYao<liuyao@163.com>"

COPY default.conf /etc/nginx/conf.d/default.conf
COPY .vuepress/dist /usr/share/nginx/html
EXPOSE 80
