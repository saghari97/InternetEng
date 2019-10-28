const express = require('express') 
const whiskers = require('whiskers') 
const fs = require('fs') 
const app = express() 
const port = 3000 
const portListen = process.env.PORT || port 
 
var inch = require('@turf/boolean-point-in-polygon') 
var pointies = require('turf-point') 
var polygonies = require('turf-polygon') 
var areas = fs.readFileSync('./sample-data.json', 'utf8') 
var whole = JSON.parse(areas); 
 
console.log('--------------------------- NEW APP ') 
app.use('/', (req, res, next) => { 
    console.log('Middleware Called!') 
    next(); 
}); 
 
app.get('/gis/testpoing', (req, res) => { 
    console.log(req.query) 
 
    var states = { 
        polygons: [] 
    }; 
 
    whole.features.forEach(polygon => { 
        if (inch.default(pointies([req.query.long, req.query.lat]), polygonies(polygon.geometry.coordinates))) { 
            states.polygons.push(polygon.properties.name); 
        } 
    }); 
    res.send(states); 
}); 
 
//    res.send( whiskers.render(` 
//        <html> 
//        <body> 
//        <h1>Hello team a new rendering engine is out!</h1> 
//         <ul> 
//            <li>Foo is:{query.foo}</li> 
//             <li>Bar is:{query.bar}</li> 
//         <ul> 
//         </body> 
//         </html> 
//    `, req)) 
// }); 
 
app.put('/gis/addpolygon', express.json(), (req, res) => { 
    whole.features.push(req.body) 
    fs.writeFileSync('./sample-data', JSON.stringify(whole), (err) => { 
        if (err) { 
            console.log("failed"); 
        } 
    }); 
    res.send("done!") 
}); 
 
app.listen(portListen, () => console.log(`Example app listening on port ${port}!`))
