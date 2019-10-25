const fs = require('fs');
const express = require('express');
const whiskers = require('whiskers');
const app=express();
const port = 3000;
var pointI = require ('point-in-polygon');
var arrs = [];
var areas = fs.readFilesSync('./sample-data.json');
var InternetEng = JSON.parse(areas);
InternetEng.arrs.forEach(function (arr) {
  arrs.push(feature);

});
app.use(express.JSON());
app.get('/gis/testpoint',(req,res)=>{
var result = {polygons:[]};
try{
 var pointII = [parse float(req.query.lat)
 features.foreach(function(feature){
  feature.geometry.coordinates.foreach(function(coordinates){
   if(pointI(pointII,coordinates))
    result.polygons.push(feature
/////////
console.log('--------------------------- NEW APP ')
app.use('/' , (req, res, next)=>{
    console.log('Middleware Called!')
    next();
});
app.get('/', (req, res) => {
    console.log(req.query)
  
//at the end
app.put('/gis/addpolygon',(req,des)=>{
 try{InternetEng.features.push(req.body);
res.sendStatus(200);}
 catch(error){res.sendStatus(403);}})
app.get('/',(req,res)=>res.send("good job!")
app.listen(port,()=> console.log('listening on ${port}'))
