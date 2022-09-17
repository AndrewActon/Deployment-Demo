const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

// Only need middleware or endpoints for Heroku to work.

// *** Middleware ***

app.use(express.static(path.join(__dirname, '../public')))

// *** Endpoints ***

// Can send entire folder to Heroku for Heroku to be able to serve up everything. 
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname, '../public'))
// })

// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, '../public/index.html'))
// })

// //Importing CSS file for front end. Must be exact same string from index.html link href.
// app.get('/styles', function (req, res) {
//     res.sendFile(path.join(__dirname, '../public/index.css'))
// })

// Heroku makes the env. This line uses the env port OR a default 4005.
const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`We vibin on ${port}`)
})