FROM node:6-slim

RUN mkdir /public

WORKDIR /public

COPY . /public

RUN cd /public; npm i; npm build;

EXPOSE 3000

CMD ["npm", "start"]
