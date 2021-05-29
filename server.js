const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('https://dbserpent.s3.ca-central-1.amazonaws.com/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port);
