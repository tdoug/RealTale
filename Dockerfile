FROM node:7.7.2-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

COPY . /opt/app

RUN npm install
RUN npm install nodemon -g

EXPOSE 3000
