FROM node:alpine as build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code
COPY . .

# Set environment variable to help with Vite's path resolution
ENV NODE_ENV=production

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine as production
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]