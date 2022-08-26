# specify the node base image with your desired version node:<version>
FROM node:16

RUN mkdir -p /var/nodeapp
WORKDIR /var/nodeapp
COPY . /var/nodeapp
RUN cd /var/nodeapp
RUN npm install

# replace this with your application's default port
EXPOSE 3001

ENTRYPOINT node /var/nodeapp/app.js


# CMD [ "node", "server.js" ]