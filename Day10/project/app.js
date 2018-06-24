var express = require("express");
let ejs = require('ejs');
let pug = require("pug");
let hbs = require('handlebars');
var exphbs  = require('express-handlebars');
let app = express();

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

let data = {
    groceries: [{
    store: 'Acme',
    list: [
        'strawberries',
        'blueberries',
        'yogurt'
    ]
    }, {
    store: 'Corner Market',
    list: [
        'baguette',
        'basil',
        'tomatoes'
    ]
    }],
} 

app.get("/", function(request,response){
    response.render("index.ejs");
});

app.get("/ejs", function(request, response){
    response.render("list.ejs", {groceries : data});
});

app.get("/pug", function(request, response){
    response.render("list.pug", {groceries : data});
});

app.get("/handlebars", function(request, response){
    response.render("list.hbs", {groceries : data});
});
app.listen(3000, function(){

});