const fs = require('fs');
const path = require('path');

const handleH = (res) => {
  const homePath = path.join(__dirname, '..', '..', 'public', 'index.html');
  fs.readFile(homePath, (error, file) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1> 404. page not found </h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(file);
    }
  });
};

module.exports = handleH;
