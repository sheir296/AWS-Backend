# Use an official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose the backend port
EXPOSE 3200

# Start the server
CMD ["npm", "start"]
