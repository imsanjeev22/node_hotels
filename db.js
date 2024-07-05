/*const mongoose=require('mongoose')

//Define the mongoDB connection URL
//const mongoURL='mongodb://localhost:27017/Hotel'
const mongoURL="mongodb+srv://skp202224:<S@njeev@98>@cluster0.kz6xvw0.mongodb.net/"


//setup mangoDB connection

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
     useUnifiedTopology: true
})

const db=mongoose.connection;

//define event listner for database
 db.on('connected', ()=>{
    console.log("Connected to MongoDB server")
 });
 db.on('error',(err)=>{
    console.error("MongoDB connection errer",err)
 });
 db.on("disconnected",()=>{
    console.log("Disconnected to mongoDB server")
 });

 module.exports=db
 *//*
 const mongoose = require('mongoose');
 require('dotenv').config();

 // Correctly encoded MongoDB connection URL with the database name specified
//const mongoURL='mongodb://localhost:27017/Hotel'
 //const mongoURL = ;
 
 // Setup MongoDB connection
 mongoose.connect(mongoURL, {
     useNewUrlParser: true,
     useUnifiedTopology: true
 });
 
 const db = mongoose.connection;
 
 // Define event listeners for database
 db.on('connected', () => {
     console.log("Connected to MongoDB server");
 });
 db.on('error', (err) => {
     console.error("MongoDB connection error", err);
 });
 db.on('disconnected', () => {
     console.log("Disconnected from MongoDB server");
 });
 
 module.exports = db;

*/
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// Use the MongoDB URI from the environment variable
const mongoURL = process.env.MONGODB_URL;
//const mongoURL = process.env.MONGODB_URL_LOCAL;


// Debugging line to check if dotenv loaded correctly
console.log("Loaded .env file from:", path.resolve(__dirname, '.env'));
console.log("MongoDB URI:", mongoURL);

// Check if the mongoURL is correctly loaded
if (!mongoURL) {
    console.error("MongoDB connection URL is not defined. Please set the MONGO_URL environment variable.");
    process.exit(1);
}

// Setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

// Define event listeners for database
db.on('connected', () => {
    console.log("Connected to MongoDB server");
});
db.on('error', (err) => {
    console.error("MongoDB connection error", err);
});
db.on('disconnected', () => {
    console.log("Disconnected from MongoDB server");
});

module.exports = db;


 
 