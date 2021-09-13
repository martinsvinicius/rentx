# image to create the container
FROM node

# work directory
WORKDIR /usr/app

# copy package.json to /usr/app
COPY package.json ./

# install dependencies in workdir (create node_modules)
RUN npm install

# copy the whole project to /usr/app
COPY . .

# expose 3333 port
EXPOSE 3333

# starts the app
CMD ["npm", "run", "dev"]