let http = require("http");
let fs = require("fs");

//Read file
http
  .createServer((req, res) => {
    fs.readFile("sampleFileForFs.txt", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.write("Error in reading file");
      }
      res.write(data);
      res.end();
    });
  })
  .listen(5050);

//Write file
http
  .createServer((req, res) => {

    fs.writeFile("sampleFileForFs.txt", "I am done", (err) => {
      console.log("Fs writeFile running....");
      if (err) {
        res.writeHead(404, { "Content-type": "text/plain" });
        res.write("Error in reading file");
      }
      res.write("File write success"); // doubt: running two times
      res.write("Currently writed file below");
      
      fs.readFileSync("sampleFileForFs.txt", (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-type": "text/plain" });
          res.write("Error in reading file");
        }
        console.log("Fs read running...."); // doubt: not running
        res.write(data);
      });
      res.end();
    });
  })
  .listen(5051);

//Append file
http
.createServer((req, res) => {
  fs.appendFile("sampleFileForFs.txt", "Appended text" , (err) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.write("Error in reading file");
    }
    res.end("Appended successfully");
  });
})
.listen(5052);

/* 
Rename file - fs.rename("sampleFileForFs.txt", "sampleFileForFs2.txt" , (err) => {}); 
delete file - fs.unlink("sampleFileForFs.txt", (err) => {});
open file - fs.open("newFile.txt", "w+"  (err, fd) => {}); // "w+" - Is a flag, specifies the behaviour of the file to opened like read/write/append
file status - fs.stat("newFile.txt", (err, stats) => {

}); 
*/

//File Status
http
.createServer((req, res) => {
  fs.stat("sampleFileForFs.txt", (err, stats) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/plain" });
      res.write("Error in reading file");
    }
    // res.write("Stats Data" + JSON.parse(stats));
    console.log("File data:", stats);
    res.write("Is it file:" + stats.isFile());
    res.write("Is it directory:" + stats.isDirectory());
    res.end();
  });
})
.listen(5053);
