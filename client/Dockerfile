FROM node:10

WORKDIR /usr/src/app/

COPY package*.json ./

RUN npm install
RUN npm build
RUN npm i -g serve

COPY . ./

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]