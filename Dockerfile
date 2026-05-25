FROM node:18.19.0-alpine AS builder

WORKDIR /opt/web

COPY package*.json ./

RUN npm install

COPY . .

ENV PATH="/opt/web/node_modules/.bin:$PATH"

RUN npm run build

FROM nginx:1.17-alpine

RUN apk --no-cache add curl

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /opt/web/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]