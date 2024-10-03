FROM node:22-alpine3.19 AS release-stage
# COPY package.json package-lock.json /app
WORKDIR /backend
COPY youtubeclone-backend .
COPY package*.json ./
COPY --from=build-stage /app/public /backend/public
RUN npm --verbose install
CMD ["npm", "start"]

