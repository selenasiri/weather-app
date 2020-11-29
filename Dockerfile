# build state for building frontend assets

FROM node:12.19.0-alpine3.10 AS build

WORKDIR /app

COPY package.json ./

RUN npm install

COPY ./ ./

RUN npm run build 


# nginx state for serving content

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]

#docker build -t selenasiri/weather:1.0 -f Dockerfile .
#docker images
#docker run -p 8080:80 -d selenasiri/weather:1.0
#docker ps
#curl -i localhost:8080
# go to http://localhost:8080/  in chrome

#if have error in build image, my solution: rm 3 party modules and re-install them again:
  # 519  rm -fr node_modules *lock*
  # 520  rm -fr build
  # 521  npm i
  # 522  docker container prune
  # 523  docker image prune
  # 524  docker build -t selenasiri/weather:1.0 -f Dockerfile .