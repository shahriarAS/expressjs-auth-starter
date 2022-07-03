# Expressjs-auth-starter

For almost every backend app or API I have to implement complete Auth functionalities. Creating DB Schema, making routes, implementing login and etc takes a long time of my whole project. That's why I though that why not I make a starter project with all auth features and just clone it when I need? From this thought I build this starter project.

**Auth Features:**

 1. Sign Up
 2. Login
 3. Email Verification ( Gmail )
 4. Reset Password
 5. Change Password
 6. **Test Included ( Jest + Supertest )**

**User Schema Field**
 1. Username
 2. Email
 3. Password
 4. User Role ( Admin/Customer )
 5. Active ( True/False )
 6. Verified ( True/False )
 7. Random String ( For Verification Purpose )
 8. Created At
 9. Updated At

**Tech Stack** 
 1. NodeJs
 2. ExpressJs
 3. MongoDB

**Packages** 
 1. bcrypt
 2. cors
 3. dotenv
 4. googleapis
 5. jsonwebtoken
 6. mongodb
 7. mongoose
 8. nodemailer
 9. nodemon
10. jest
11. supertest

## **How to use?**

 1. Clone this repo.
 2. Go to the directory.
 3. Make a .env file.
 4. Open .env.example file and copy everything from this file.
 5. Paste copied text to just created .env file
 6. Fill necessary variable. ( How to get CLIENT_ID, CLEINT_SECRET etc ?? Follow this [link](https://docs.google.com/document/d/e/2PACX-1vSC-d9T5kRDn-J8iem57OXC5fK5KU1m8SZNinxPcU4b4qBTET7PWhWaN6lSTvdAKYPiP81oIudvEraB/pub) )
 8. Use `yarn install` or `npm install` command
 9. Use `yarn dev` or `npm dev` command.

**N.B: Your test may fail, take a look and change necessary value to pass.**
