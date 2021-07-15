// import 
import express from "express"

import * as studentDb from "./data/student-Db.js"

// create express app
const app = express()




// Configure the app (app.set)
app.set('view engine', 'ejs')
// 


// Mount Middleware (app.use)


app.get('/', function(req, res){
    res.send('<h1>"sei student"</h1>')
})

app.get('/home', function(req, res){
    res.render('home')
})

app.get('/', function(req, res) {
    res.redirect('/home')
  })

app.get('/students', function(req, res){
    studentDb.find({}, function(error, students){
        res.render("students/index",{
            students: students,
            error: error
        })
    })
})



// Mount routes

// Tell the app to listen on port 3000
app.listen(3000, function(){
    console.log("listening on port 3000")
})