var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	
 // response.send('Hello World 2! Hola !!');
  
  //read index.html contents
  
  buf = new Buffer(256);
buf =  fs.readFileSync("index.html");
console.log(buf.toString());
response.send(buf.toString());
  
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});