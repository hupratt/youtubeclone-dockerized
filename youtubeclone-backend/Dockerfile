FROM node:22-alpine3.19 AS release-stage
# COPY package.json package-lock.json /app
WORKDIR /backend
COPY . .
COPY package*.json ./
RUN npm --verbose install
CMD ["npm", "start"]

