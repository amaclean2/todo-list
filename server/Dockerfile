FROM node:10

WORKDIR /usr/src/app/api

COPY package*.json ./api

RUN npm install

COPY . ./api

EXPOSE 5000
CMD ["npm", "start"]