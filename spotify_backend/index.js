// npm init : package.json -> This is a node project.
// npm i express : expressJs package installed. -- project came to know that we are using express.
// we finally use express

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 8000;

// Middleware to parse JSON
app.use(express.json());


// connect mongodb to our node app.
// mongoose.connect() takes 2 arguments : 1. which db to connect to (db url); 2. connection option 
mongoose.connect("mongodb+srv://spotify_clone:" + process.env.MONGO_PASSWORD + "@cluster0.rohx7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
         
 )
 .then(()=>{
        console.log("Connected to Mongo!");
 })
 .catch((err) => {
        console.log("Error while connecting to Mongo");
 });


// API : GET type : / : return text "Hello World"
app.get("/", (req, res) => {
        // req contains all data for request
        // res contains all data for response

        res.send("Hello World");
});

// Now we want to tell express that our server will run on localhost8000 
 app.listen(port, () => {
    console.log("App is running on port "+ port);
 });

 