const express = require("express")
const app = express()

app.get("/",function(res,req){

    res.send("Welcome to Heroku deploy Demo")


})

app.listen(process.env.PORT || 5000);