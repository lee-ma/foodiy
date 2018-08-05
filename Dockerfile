# Using base node image
FROM node:8.9.4
# Create root directory
RUN mkdir /usr/src/app
# Move to base working directory
WORKDIR /usr/src/app
# Create client folder
RUN mkdir client
# Copy client package.json to container
COPY ./client/package.json client/package.json
# Install client dependencies
WORKDIR /usr/src/app/client
RUN npm install
WORKDIR /usr/src/app

# Copy server package.json over
COPY package.json .
# Install server dependencies
RUN npm install

# Copy the rest of the necessary client files
COPY client/public client/public
COPY client/src client/src
# Build the client
WORKDIR /usr/src/app/client
RUN npm build
WORKDIR /usr/src/app/

EXPOSE 3001

# Copy over server files
COPY ./config config
COPY ./models models
COPY ./routes routes
COPY ./services services
COPY ./utils utils
COPY ./index.js index.js

CMD ["npm", "start"]