# This file is the main docker file configurations

# Official Node JS runtime as a parent image
FROM node:16

# Set the working directory to ./app
WORKDIR /usr/local/app

COPY ./ /usr/local/app/

# Install any needed packages
RUN npm install

RUN npm run build

# use official nginx image as the base image
FROM nginx:latest

# Copy or replace build output to replace the default nignx containers
COPY build /usr/share/nginx/html

# Make port 3000 available to the world outside this container
EXPOSE 80

# Run app.js when the container launches
# CMD ["npm", "start"]
