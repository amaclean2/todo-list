FROM node:10

WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 5000
CMD ["npm", "start"]