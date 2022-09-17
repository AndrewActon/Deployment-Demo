const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//Importing CSS file for front end. Must be exact same string from index.html link href.
app.get('/styles', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.css'))
})

// Heroku makes the env. This line uses the env port OR a default 4005.
const port = process.env.PORT || 4005

app.listen(port, () => {
    console.log(`We vibin on ${port}`)
})