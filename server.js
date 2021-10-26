// import modules

import express from 'express'
// import the todos database
import * as comixDb from './data/comix-db.js'
// we could also do:
//import { find } from './data/comix-db.js'
// but not both! (well, you can, but please don't)

// Create Express app

const app = express()

// Configure the app (app.set)

app.set('view engine', 'ejs')

// Mount Middleware (app.use)



// Mount routes

app.get('/', function(req, res) {
  res.send('<h1>Hello, Reado...</h1>')
})

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/comics', function(req, res) {
  comixDb.find({}, function(error, comics) {
    res.render('comics/index', {
      comics: comics,
      error: error
    })
  })
})

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})