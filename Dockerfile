FROM node:8

ADD . /app

WORKDIR /app

RUN npm ci --only=production

EXPOSE 3000

CMD [ "npm", "start" ]
