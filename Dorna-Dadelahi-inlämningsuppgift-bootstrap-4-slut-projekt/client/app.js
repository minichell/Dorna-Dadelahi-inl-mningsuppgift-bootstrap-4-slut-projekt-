const express = require('express')
const mongoose = require('mongoose')
const InfoModule = require ('./InfoModule')
const app = express()
const port = 3000

const clientDir = __dirname + "//client//"

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use (express.static(clientDir))

app.get('/contact', async (req, res) => {
    let contact = await InfoModule.GetAllInfo();
    res.render("pages/contact.html", {info: contact})
})

app.post ('/contact', async (req,res) => {
    var infos = InfoModule.createInfo(req.body.first, req.body.last, req.body.email, req.body.phone);
    DBModule.createInfo(infors);

    var infos = await InfoModule.GetAllInfo();

    res.render('pages/conact.html',  {info: contact});
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))