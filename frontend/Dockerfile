FROM node:20-alpine as builder

COPY package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]