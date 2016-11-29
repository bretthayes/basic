FROM node:6-slim

RUN mkdir /public

WORKDIR /public

COPY . /public

RUN cd /public; npm i;

EXPOSE 3000

CMD ["npm", "start"]
