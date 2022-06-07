FROM node:14

RUN mkdir /www/
RUN mkdir /www/app
WORKDIR /www/app


COPY package.json .
RUN npm i


COPY index.js ./
COPY views views


ENTRYPOINT ["node", "index.js"]
