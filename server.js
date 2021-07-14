// import 
import express from "express"

// create express app
const app = express()

// Configure the app (app.set)
app.set("view engine","ejs")


// Mount Middleware (app.use)



// Mount routes
app.get('/student', function(req, res){
    res.send("sei student")
})


// Tell the app to listen on port 3000
app.listen(3000, function(){
    console.log("listening on port 3000")
})