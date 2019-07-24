const handler = require('./handlers/index');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    handler.handleHome(res);
  } else if (endpoint.includes('/public')) {
    handler.handleStatics(req, res, endpoint);
  } else if (endpoint === '/API') {
    handler.handleD(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
};

module.exports = router;
