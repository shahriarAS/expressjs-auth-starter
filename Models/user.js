// External Import
const mongoose = require("mongoose");

// Init Schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
        index: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "customer"],
    },
    active: {
        type: Boolean,
        required: true,
        default: false,
    },
    verified: {
        type: Boolean,
        required: true,
        default: false,
    },
    randString: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
});

// Model Init
const userModel = new mongoose.model("userModel", userSchema);
userModel.createIndexes();

module.exports = userModel;
