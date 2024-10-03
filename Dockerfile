FROM node:12-alpine AS build-stage
# COPY package.json package-lock.json /app
WORKDIR /app
COPY youtubeclone-frontend/src .
COPY youtubeclone-frontend/package.json .
COPY youtubeclone-frontend/*.lock .
COPY youtubeclone-frontend/node_modules .
COPY youtubeclone-frontend/public .
COPY youtubeclone-frontend/.env .
RUN npm --verbose install
#RUN npm install -g serve
RUN npm install -g pm2
RUN npm run build
EXPOSE 5000
CMD ["pm2", "serve", "build", "5000", "--no-daemon"]

FROM node:22-alpine3.19 AS release-stage
# COPY package.json package-lock.json /app
WORKDIR /backend
COPY youtubeclone-backend/src .
COPY youtubeclone-backend/package.json .
COPY youtubeclone-backend/*.lock .
COPY youtubeclone-backend/node_modules .
COPY youtubeclone-backend/public .
COPY youtubeclone-backend/.env .
RUN npm --verbose install
CMD ["npm", "start"]
COPY --from=build-stage /app/build /backend/build
