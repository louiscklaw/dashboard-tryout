FROM node:16-buster

WORKDIR /usr/src/app

# co-op with docker-compose volume settings for user permission
RUN mkdir /usr/src/app/node_modules
RUN chown node:node /usr/src/app/node_modules
USER node

# COPY package*.json ./

# RUN npm install --only=development

# COPY . .

# RUN npm run start:dev
