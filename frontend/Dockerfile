FROM node:16.14.0 AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install 
COPY . ./
RUN npm run build

FROM nginx:stable-alpine
WORKDIR /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]