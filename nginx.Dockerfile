
FROM node:14-alpine as builder

WORKDIR /code
ADD . /code
FROM nginx:alpine
ADD index.html /usr/share/nginx/html/
COPY --from=builder code/qrcode /usr/share/nginx/html/qrcode

