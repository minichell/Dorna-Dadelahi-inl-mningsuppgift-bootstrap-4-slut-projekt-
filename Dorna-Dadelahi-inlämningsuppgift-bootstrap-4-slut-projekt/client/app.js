const express = require('express')
const mongoose = require('mongoose')
const InfoModule = require ('./InfoModule')
const app = express()
const port = 3000

const clientDir = __dirname + "/html/"
const cssDir = __dirname + "/css/"
//console.log ( __dirname )

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use (express.static(clientDir))

app.get('/', (req, res) =>{
    res.render(clientDir + "index.html")
    res.render(cssDir + "bootstrap.min.css")
})

app.get('/contact', async (req, res) => {
    let contact = await InfoModule.GetAllInfo();
    res.render("./html/contact.html", {info: contact})
})

app.post ('/contact', async (req,res) => {
    var infos = InfoModule.createInfo(req.body.firstName, req.body.lastName, req.body.email, req.body.phoneNumber);
    DBModule.createInfo(infors);

    var infos = await InfoModule.GetAllInfo();

    res.render('./html/conact.html',  {info: contact});
})


app.listen(port, () => console.log(`Example app listening on port port!`))