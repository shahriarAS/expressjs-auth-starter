// External Module
import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
// Internal Module
import userRoute from "./Routes/user.route.js"


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
app.use("/user.js", userRoute)

// Server Setup
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`)
})