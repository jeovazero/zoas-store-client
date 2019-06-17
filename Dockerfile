FROM node:dubnium-alpine as build

RUN mkdir -p /home/node/zoas-client

WORKDIR /home/node/zoas-client

ADD . /home/node/zoas-client

RUN npm install -g -s --no-progress yarn && yarn

ARG API_URL
RUN API_URL=$API_URL yarn build

FROM nginx:alpine

COPY --from=build /home/node/zoas-client/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT nginx -g 'daemon off;'
