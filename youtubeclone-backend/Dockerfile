FROM node:22-alpine3.19 AS release-stage
# COPY package.json package-lock.json /app
WORKDIR /backend
COPY src .
COPY package.json .
COPY *.lock .
COPY node_modules .
COPY public .
COPY .env .
RUN npm --verbose install
CMD ["npm", "start"]
# COPY --from=build-stage /app/build /backend/build
