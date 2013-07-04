var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	
 // response.send('Hello World 2! Hola !!');
  //--------------------
  
  var fs = require("fs");
var fileName = "index.html";
fs.exists(fileName, function(exists) {
  if (exists) {
    fs.stat(fileName, function(error, stats) {
      fs.open(fileName, "r", function(error, fd) {
        var buffer = new Buffer(stats.size);
        fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
          var data = buffer.toString("utf8", 0, buffer.length);
          console.log(data);
          response.send(data);
          fs.close(fd);
        });
      });
    });
  }
  else{
  console.log("File not found ..." + filename);
          response.send("File not found ..." + filename);
       }
});

//---------------
   

  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});