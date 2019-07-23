const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    // handleHome;
  } else if (endpoint.includes('/public')) {
    // handleStatics;
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page Not Found</h1>');
  }
};

module.exports = router;
