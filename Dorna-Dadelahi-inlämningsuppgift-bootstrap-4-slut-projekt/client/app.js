const express = require('express')
const mongoose = require('mongoose')
const DBModule = require('./DBModule')
const InfoModule = require ('./InfoModule')
const app = express()
const port = 3000

const clientDir = __dirname + "/html/"
const cssDir = __dirname + "/css/"


app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use (express.static(clientDir))
app.use(express.static(cssDir))

app.get('/', (req, res) =>{
    res.render(clientDir + "index.ejs")
    res.render(cssDir + "bootstrap.min.css")
})

app.get('/contact', async (req, res) => {
    let infos = await InfoModule.GetAllInfo();
    res.render(clientDir + "contact.ejs", {info: infos})
})

app.post('/contact', async (req,res) => {
    var info = InfoModule.createInfo(req.body.firstName, req.body.lastName, req.body.email, req.body.phoneNumber);
    DBModule.createInfo(infos);

    var infos = await InfoModule.GetAllInfo();

    res.render(clientDir + "contact.ejs",  {info: infos});
})


app.listen(port, () => console.log(`Example app listening on port port!`))