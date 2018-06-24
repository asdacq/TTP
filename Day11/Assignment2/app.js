var express = require("express");
var app = express();


let ejs = require('ejs');

cars = {
    listOfCars: [
    {
        brand: "Honda Civic",
        info: [ 
            "Type: Sedan",
            "Year: 2018",
            "MSRP: $22,280",
        ],
    }, 
    {
        brand: "Lexus RX 350L",
        info: [ 
            "Type: SUV",
            "Year: 2018",
            "MSRP: $47,670",
        ],
    },
    {
        brand: "Toyota Camry",
        info: [ 
            "Type: Sedan",
            "Year: 2018",
            "MSRP: $23,495",
        ],
    },
    ]
} 

// Individual .ejs views for each list item
app.get("/", function(request, response){
    response.render("ejs_view.ejs", {cars : cars});
});

app.get("/Honda", function(request, response){
    response.render("honda.ejs", {cars : cars});
});
app.get("/Lexus", function(request, response){
    response.render("lexus.ejs", {cars : cars});
});
app.get("/Toyota", function(request, response){
    response.render("toyota.ejs", {cars : cars});
});

// This will show the item when given the array index
app.get("/:listOfCars",function(request, response){
    var i = request.params.listOfCars;
    response.render("index.ejs", {cars: cars.listOfCars[i]});
});

app.listen(3001, function(){

});