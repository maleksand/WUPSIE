FROM node:17.7.1
EXPOSE 3000

WORKDIR /app

COPY ["./Node-server/package.json", "./Node-server/package-lock.json*", "./"]

RUN npm install --production

COPY "./Node-server/" .

CMD [ "node", "server.js" ]