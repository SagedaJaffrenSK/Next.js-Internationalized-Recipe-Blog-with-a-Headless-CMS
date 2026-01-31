FROM node:20-alpine
# Install curl so the healthcheck works
RUN apk add --no-cache curl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]