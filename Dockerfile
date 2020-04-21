FROM node:8

ADD . /app

WORKDIR /app

RUN npm ci --only=production

ENV DOCKER_REGISTRY nhjcontainreg.azurecr.io

EXPOSE 3000

CMD [ "npm", "start" ]