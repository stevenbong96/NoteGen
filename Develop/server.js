// Declare the npm package
const express = require("express");
const path = require("path");
const fs = require("fs");

// Declare the express variables
var app = express();
var PORT = 8080;
// var PORT = process.env.PORT || 8080;

// Set the express for parsing the data
app.use(express.urlencoded({extended: true}));
app.use(express.json())
// app.use(express.static("public"));

// Declare the variables
var notesArr = [{
    "title": "Bla bla bla",
    "text": "wassup",
}];

// Declare the routes to display HTML page
// Display the index.html file
app.get("*", function(request, response){
    response.sendFile(path.join(__dirname, "index.html"));
})

// Display the notes.html
// app.get("/notes", function(request, response){
//     response.sendFile(path.join(__dirname, "notes.html"));
// })

// Declare API routes
// GET method
// app.get("/api/notes", function(request, response){
//     fs.readFile(path.join(__dirname, "db.json"), function(err){
//         if(err){
//             throw err
//         }
//     });
// })

// POST method
// app.post("/api/notes", function(request, response){
//     var newNote = request.body;
//     console.log(newNote);

//     notesArr.push(newNote);

//     response.json(newNote);
// })

// DELETE method
// app.delete("/api/notes/:id", function(request, response){
//     var sorting = request.params.id;
//     console.log(sorting);
    
//     for(let i = 0; i < notesArr.length; i++){
//         if(sorting === notesArr[i].id){
//             response.json()
//         }
//     }
// })

// Declare the listen function
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})