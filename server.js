// Declare the npm package
const express = require("express");
const path = require("path");
const fs = require("fs");

// Declare the express variables
var app = express();
// var PORT = 8080;
var PORT = process.env.PORT || 8080;

// Declare the variables
var notesArr = [];

// Set the express for parsing the data
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static("public"));

// Declare the routes to display HTML page
// Display the index.html file
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname, "./public/index.html"));
})

// Display the notes.html
app.get("/notes", function(request, response){
    response.sendFile(path.join(__dirname, "./public/notes.html"));
})

// Declare API routes
// GET method
app.get("/api/notes", function(request, response){
    fs.readFile("./db/db.json", function(err, data){
        if(err){
            throw err
        }
        return response.json(JSON.parse(data))
    });
})

// POST method
app.post("/api/notes", function(request, response){
    request.body["id"] = notesArr.length + 1;
    var newNote = JSON.stringify(request.body);
    // console.log(request);
    // console.log(request.body);
    notesArr.push(newNote);
    // console.log(notesArr);
    fs.writeFile("./db/db.json", `[${notesArr}]`, 'utf-8', function(err){
        if(err){
            throw err
        }
        return response.json(request.body);
    })
})

// DELETE method
app.delete("/api/notes/:id", function(request, response){
    var sorting = request.params.id;
    // console.log(sorting);
    
    fs.readFile("./db/db.json", function(err, data){
        if(err){
            throw err
        }

        var notesHistory = JSON.parse(data);
        // console.log(notesHistory)
        for(let i = 0; i < notesArr.length; i++){
            if(sorting == notesHistory[i].id){
                notesArr.splice(i, 1)
                // console.log(notesArr)
                fs.writeFile("./db/db.json", `[${notesArr}]`, 'utf-8', function(err){
                    if(err){
                        throw err
                    }
                    return 
                })
            }
        }
    })
    
    response.end()
})

// Declare the listen function
app.listen(PORT, function(){
    console.log("App listening on PORT " + PORT);
})