FROM node:12-alpine AS build-stage
# COPY package.json package-lock.json /app
WORKDIR /frontend
COPY package.json .
RUN npm --verbose install
COPY src .
COPY *.lock .
COPY node_modules .
COPY public .
COPY .env .
RUN npm install -g pm2
# RUN npm run build
EXPOSE 5000
# CMD ["pm2", "serve", "build", "5000", "--no-daemon"]