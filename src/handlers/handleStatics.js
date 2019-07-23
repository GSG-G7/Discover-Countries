const fs = require('fs');
const path = require('path');

const handleStatics = (req, res, endpoint) => {
  const pathStat = endpoint.split('/');
  const extention = endpoint.split('.')[1];
  const extentionType = {
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpg',
    png: 'image/png',
    html: 'text/html',
    ico: 'image/x-icon',
  };
  const pathFile = path.join(__dirname, '..', 'public', ...pathStat);
  fs.readFile(pathFile, (error, file) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>Page Not Found</h1>');
    } else {
      res.writeHead(200, { 'Content-Type': extentionType[extention] });
      res.end(file);
    }
  });
};

module.exports = handleStatics;
