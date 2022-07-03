// External Module
import express from "express";
// Internal Module
import { userDelete, userEmailVerify, userForgotPassword, userLogin, userPassChange, userRandStringCheck, userRegister, userResetPassword, userView } from "../Controllers/user.controller.js";
import verifyLoginMiddleware from "../Middlewares/verifyLogin.middleware.js";


// Router Init
const userRoute = express.Router()

// All Student Routes

// User View
userRoute.get("/view", verifyLoginMiddleware, userView)

// User Register
userRoute.get("/register", userRegister)

// User Login
userRoute.get("/login", userLogin)

// User Email Verify
userRoute.get("/verify-email/:username/:randString", userEmailVerify)

// User Change Pass
userRoute.get("/change-pass", verifyLoginMiddleware, userPassChange)

// User Forgot Pass
userRoute.get("/forgot-pass", userForgotPassword)

// User Random String Check
userRoute.get("/check-string/:username/:randString", userRandStringCheck)

// User Reset Password
userRoute.get("/reset-pass/:username/:randString", userResetPassword)

// User Delete User
userRoute.get("/delete-user", verifyLoginMiddleware, userDelete)

export default userRoute