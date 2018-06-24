var express = require("express");
var app = express();

// app.get("/hello/:name", function (request, response){
// 	console.log(`got request for "/hello/${request.params.name}"`);
// 	response.send(`hello ${request.params.name}!`);
// });

// A(pp)?le works also
app.get("/apple|/ale", function(request,response){
	response.send("Apple or Ale");
});

app.get("/who+a+", function(request, response){
	response.send("Same");
});

app.listen(3000, function(){
	console.log("example app listening");
});

