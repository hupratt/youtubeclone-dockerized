FROM node:22-alpine3.19 AS release-stage
# COPY package.json package-lock.json /app
WORKDIR /backend
COPY package.json .
COPY *.lock .
RUN npm --verbose install
COPY src .
COPY public .
COPY .env .
CMD ["npm", "start"]
# COPY --from=build-stage /app/build /backend/build
