FROM node:10-alpine as builder
LABEL maintainer="YaoYao<liuyao@163.com>"

WORKDIR /home/node/app
COPY package.json /home/node/app/
RUN yarn install
COPY . /home/node/app
RUN rm -rf /home/node/app/docs/.vuepress/dist
RUN yarn docs:build


FROM nginx:alpine
COPY --from=builder /home/node/app/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/node/app/docs/.vuepress/dist /usr/share/nginx/html
EXPOSE 80

