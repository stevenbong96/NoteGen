// Declare the npm package
const express = require("express");
const path = require("path");

// Declare the express variables
var app = express();
var PORT = 8080;

// Set the express for parsing the data
app.use(express.urlencoded({extended: true}));
app.use(express.json())

// Declare the variables

// Declare the routes

// Declare the listen function
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})