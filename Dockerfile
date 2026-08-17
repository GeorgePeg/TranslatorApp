# Building 
FROM node:22-alpine AS build

# Work directory
WORKDIR /app

# Copy file dependencies to use Docker layer caching
COPY package*.json ./

# Run command
RUN npm install

# Copying all the other files
COPY . .
RUN npm run build

# Serve with Nginx
FROM nginx:alpine

# Copy of the static files from /build to Nginx
COPY  --from=build /app/dist /usr/share/nginx/html

# Expose to port
EXPOSE 80

# Keeping the container open
CMD ["nginx", "-g", "daemon off;"]
