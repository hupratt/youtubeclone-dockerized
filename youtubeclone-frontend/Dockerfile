#FROM keymetrics/pm2:latest-alpine

FROM node:12-alpine AS build-stage
# COPY package.json package-lock.json /app
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm --verbose install
#RUN npm install -g serve
RUN npm install -g pm2
RUN npm run build
EXPOSE 5000
CMD ["pm2", "serve", "build", "5000", "--no-daemon"]
