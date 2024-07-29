/*const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// Use the MongoDB URI from the environment variable
//const mongoURL = process.env.MONGODB_URL;
const mongoURL = process.env.MONGODB_URL_LOCAL;


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
*/
const mongoose = require('mongoose');
require('dotenv').config();

// Define the MongoDB connection URL
// const mongoURL = process.env.MONGODB_URL_LOCAL // Replace 'mydatabase' with your database name
const mongoURL = process.env.MONGODB_URL;

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;

