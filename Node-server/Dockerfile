FROM node:17.7.1
ENV NODE_ENV=docker
EXPOSE 3000

WORKDIR /app

COPY ["./Node-server/package.json", "./Node-server/package-lock.json*", "./"]

RUN npm install --production

COPY "./Node-server/" .

CMD [ "node", "server.js" ]