// External Module
const express = require("express");
// Internal Module
const { userView, userRegister, userLogin, userEmailVerify, userPassChange, userForgotPassword, userRandStringCheck, userResetPassword, userDelete } = require("../Controllers/user.controller.js");
const verifyLoginMiddleware = require("../Middlewares/verifyLogin.middleware.js")


// Router Init
const userRoute = express.Router()

// All Student Routes

// User View
userRoute.get("/view", verifyLoginMiddleware, userView("customer"))

// User Register
userRoute.post("/register", userRegister("customer"))

// User Login
userRoute.post("/login", userLogin("customer"))

// User Email Verify
userRoute.post("/verify-email/:username/:randString", userEmailVerify("customer"))

// User Change Pass
userRoute.post("/change-pass", verifyLoginMiddleware, userPassChange("customer"))

// User Forgot Pass
userRoute.post("/forgot-pass", userForgotPassword("customer"))

// User Random String Check
userRoute.post("/check-string/:username/:randString", userRandStringCheck("customer"))

// User Reset Password
userRoute.post("/reset-pass/:username/:randString", userResetPassword("customer"))

// User Delete User
userRoute.post("/delete-user", verifyLoginMiddleware, userDelete("customer"))

module.exports = userRoute