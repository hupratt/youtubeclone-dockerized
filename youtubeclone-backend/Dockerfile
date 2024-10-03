#FROM keymetrics/pm2:latest-alpine

FROM node:12-alpine AS build-stage
# COPY package.json package-lock.json /app
WORKDIR /app
COPY . .
RUN npm --verbose install
#RUN npm install -g serve
RUN npm install -g pm2
RUN npm run build
EXPOSE 5000
CMD ["pm2", "serve", "build", "5000", "--no-daemon"]

FROM node:22-alpine3.19 AS release-stage
# COPY package.json package-lock.json /app
WORKDIR /backend
COPY . .
RUN npm --verbose install
#RUN npm install -g serve
# RUN npm install -g pm2
CMD ["npm", "start"]
# Stage 2
#FROM nginx:1.17.0-alpine
#COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=build-stage /app/build /usr/share/nginx/html
#EXPOSE 89

#CMD nginx -g 'daemon off;'
# CMD serve -s build

#CMD serve -s build
