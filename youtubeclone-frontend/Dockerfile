FROM node:12-alpine AS build-stage
# COPY package.json package-lock.json /app
WORKDIR /frontend
# COPY package.json .
# RUN npm --verbose install
# RUN npm install -g pm2
# COPY src .
# COPY *.lock .
# COPY node_modules .
# COPY public .
# COPY .env .
COPY . .
# RUN npm run build
# RUN npm install serve -g
RUN npm install pm2 -g
CMD ["npm", "run", "build"]
# CMD ["serve", "-s", "build"]
CMD ["pm2", "serve", "build", "5000", "--no-daemon"]
EXPOSE 5000