const app = require("./app.js");

// Server Setup
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`)
})