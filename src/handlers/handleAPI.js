const fs = require('fs');
const path = require('path');

const handleAPI = (res) => {
  const homePath = path.join(__dirname, '..', 'API', 'data.json');
  fs.readFile(homePath, (error, file) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1> 404. page not found </h1>');
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(file);
    }
  });
};

module.exports = handleAPI;
