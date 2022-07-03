// External Module
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
// Internal Module
const userRoute = require("./Routes/user.route.js");


// Initialize App
const app = express()

// Using Middleware
app.use(express.json())
app.use(cors())
dotenv.config()

// Database Setup
mongoose.connect(process.env.MONGO_DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("MongoDB Started")
})

// Main Routes
app.use("/user", userRoute)

module.exports = app