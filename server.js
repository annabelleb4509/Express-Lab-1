const express = require('express');
const path = require('path'); // standard library

const app = express();  

app.set('view engine', 'ejs');  
app.set('views', path.join(__dirname, 'views'))

const studentsDB = require('./data/students-db');

// route
app.get('/', function (req, res) {
    res.redirect('/students');
 });
 
 app.get('/home', function(req, res) {
     res.render('home');
 });
 
 app.get('/students', function (req, res) {
     const students = studentsDB.getAll();
     res.render('students/index', { students });
 });
 

 app.listen(3040, function () {
    console.log('server running at localhost:3040');
});