const fs = require('fs');
const express = require('express');
const whiskers = require('whiskers');
const app=expree();
const port = 3000;
var areas = fs.readFilesSync('./sample-data.json');
var InternetEng = JSON.parse(areas.toString());
console.log('--------------------------- NEW APP ')
app.use('/' , (req, res, next)=>{
    console.log('Middleware Called!')
    next();
});
app.get('/', (req, res) => {
    console.log(req.query)
  
