FROM node:18.19.0-alpine AS builder
COPY . /opt/web
WORKDIR /opt/web
ENV NODE_TLS_REJECT_UNAUTHORIZED 0 
RUN npm install
RUN npx browserslist@latest --update-db
ENV PATH="/opt/web/node_modules/.bin:$PATH"

RUN npm run build

FROM nginx:1.17-alpine

RUN apk --no-cache add curl
RUN mkdir -p /etc/nginx/conf.d/ssl
COPY nginx.conf /etc/nginx/conf.d/default.conf


COPY --from=builder /opt/web/dist /usr/share/nginx/html

RUN chgrp -R 0 /var/* && chmod -R g=u /var/*
RUN chgrp -R 0 /etc/nginx/* && chmod -R g=u /etc/nginx/*
#RUN setsebool -P httpd_can_network_connect on
#EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
