let http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer((req, res) => {
    console.log("Req -> URL", req.url);
    let weblink = url.parse(req.url, true);
    let path = "."+weblink.pathname;
    console.log("Path", path);
    fs.readFile(path, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-type': 'text/html' });
          res.write('Error in reading file');
        }
        res.writeHead(200, { 'Content-type': 'text/html' });
        console.log('Data:', data);
        res.write(data);
        res.end();
      });
}).listen(8080);