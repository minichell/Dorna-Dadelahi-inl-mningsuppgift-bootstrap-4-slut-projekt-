const express = require('express')
const mongoose = require('mongoose')
const InfoModule = require ('./InfoModule')
const app = express()
const port = 3000

const clientDir = __dirname + "//client//"

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use (express.static(clientDir))

app.get('/', (req,res) => {
    res.render("pages/contact.html")
})


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))