FROM node:23.10-alpine as build

COPY package.json package.json
RUN npm install
COPY . .
RUN npm build

FROM nginx:stable-alpine as nginx
COPY --from=build /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf/
EXPOSE 3000
CMD [ "nginx", "-g", "daemon-off;"]