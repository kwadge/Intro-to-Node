FROM node:19

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your production
# RUN npm ci --omit=dev

# Bundle app source code
COPY . .

EXPOSE 8080

CMD [ "node", "hello.js" ]
