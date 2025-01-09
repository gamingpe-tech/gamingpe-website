FROM node:18.19.0-alpine

ADD . /app

WORKDIR /app

ENV NODE_TLS_REJECT_UNAUTHORIZED 0  

RUN npm install

RUN chgrp -R 0 /app && chmod -R g=u /app

RUN npm run build

CMD ["npm", "run", "preview"]
