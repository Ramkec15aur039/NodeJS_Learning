let http = require("http");
http.createServer((req, res) => {
  console.log("Http module running...")
  res.writeHead(200, { "Content-type": "text/plain" }); //Response header
  res.write("Welcome!!!!!!!!"); //Write Response 
  res.end("Thankyou!!!!!!!!!!!"); // End of the respond, this for compiler understanding
}).listen(5050);
