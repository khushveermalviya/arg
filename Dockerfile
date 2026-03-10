# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:18-alpine as production

WORKDIR /app

# Install only runtime dependencies for API server
COPY package*.json ./
RUN npm install --omit=dev

# Copy backend API and built frontend files
COPY --from=build /app/backend ./backend
COPY --from=build /app/dist ./dist

EXPOSE 80

CMD ["npm", "run", "start"]
