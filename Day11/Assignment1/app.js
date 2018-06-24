const express = require("express");
const bodyParser = require('body-parser');
const app = express();

let ejs = require("ejs");
let fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


app.listen(8000, function(){
	console.log("Port 8000 open");
});

app.get("/", (request, response) => {
    response.render("view.ejs", {});
});

app.get("/showall", (request, response) =>{
	let data = fs.readFileSync("data.json", "utf8");
	var parsedJSON = JSON.parse(data);
	response.render("showall.ejs", {person : parsedJSON});
});

app.post("/", function (request, response) {
	let data = fs.readFileSync("data.json", "utf8");
	var parsedJSON = JSON.parse(data);
	console.log(parsedJSON.Person[0]);
	let first = request.body.text1;
	let last = request.body.text2;
	let userData = {
		"First": first,
		"Last" : last
	}
	parsedJSON.Person.push(userData);
	fs.writeFileSync("data.json", JSON.stringify(parsedJSON, null, 2));
	console.log("stringify " + JSON.stringify(parsedJSON));
	response.render("view.ejs", { people : parsedJSON});
});
