FROM node:12-alpine AS build-stage
# COPY package.json package-lock.json /app
WORKDIR /app
COPY youtubeclone-frontend .
RUN npm --verbose install
#RUN npm install -g serve
RUN npm install -g pm2
RUN npm run build
EXPOSE 5000
CMD ["pm2", "serve", "build", "5000", "--no-daemon"]

FROM node:22-alpine3.19 AS release-stage
# COPY package.json package-lock.json /app
WORKDIR /app
COPY youtubeclone-backend .
RUN npm --verbose install
CMD ["npm", "start"]
COPY --from=build-stage /app/public /backend/public
