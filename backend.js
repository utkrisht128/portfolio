const fs = require("fs");
const express = require("express")
const app = express();
const path = require("path");
const http = require("http");
const hostname = '127.0.0.1';
const bodyparser = require("body-parser");
const port = 80;
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory

app.get('/', (req, res) => {
    res.status(200).render('home.pug');
});
app.get('/home.html', (req, res) => {
    res.status(200).render('home.pug');
});
app.get('/myhobbies.html', (req, res) => {
    res.status(200).render('myhobbies.pug');
});
app.get('/skills.html', (req, res) => {
    res.status(200).render('skills.pug');
});
app.listen(port, () => {
    console.log('the application started succesfully');
    console.log(port)
})