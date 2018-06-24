const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const apiKey = "82c95a023259d6b952a5ac803394be01";

// Allows express to use the public folder (CSS)
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.get('/', function(req,res){
  res.render('index.ejs', {weather: null, error: null});
});

app.post('/', function (req, res) {
  let city = req.body.city;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  request(url, function (err, response, body) {
    	if(err){
      		res.render('index.ejs', {weather: null, error: 'Error, please try again'});
    	} else {
      		let weather = JSON.parse(body);
      		if(weather.main == undefined){
        		res.render('index.ejs', {weather: null, error: 'Error, please try again'});
      		} else {
        		let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        		res.render('index.ejs', {weather: weatherText, error: null});
      		}
    	}
  	});
});

app.post('/', function (req, res) {
  res.render("index.ejs");
  console.log(req.body.city);
});

app.listen(3000, function () {

});