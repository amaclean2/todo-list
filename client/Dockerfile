FROM node:10

WORKDIR /usr/src/app/client

COPY package*.json ./client

RUN npm install

COPY . ./client

EXPOSE 3000
CMD ["npm", "start"]