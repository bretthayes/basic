FROM node:6.10.1-slim

RUN mkdir /public

WORKDIR /public

COPY . /public

RUN cd /public
RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
