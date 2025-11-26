# Use Node official image
FROM node:18

# Create app folder
WORKDIR /app

# Copy files
COPY package*.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
