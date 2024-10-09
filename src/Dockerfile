# Stage 1: Build the Angular application
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all application files
COPY . .

# Build the application in production mode
RUN npm run build -- --configuration production

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy built files from the 'router-app' directory to Nginx's html directory
COPY --from=build /app/dist/router-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]