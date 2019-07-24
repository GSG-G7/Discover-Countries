const http = require('http');
const router = require('./router');

const server = http.createServer(router);
const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server is listening on http://localhost:${port}`);
});
