const express = require('express');
const app = express();
app.use(express.json());
var lab = [
 {marks : '100', id : 'M1',status : 'PASS'},
 {marks : '49', id : 'M2',status : 'FAIL'},
{marks : '35', id : 'M3',status : 'FAIL'},
 {marks : '85', id : 'M4',status : 'PASS'},
 {marks : '88', id : 'M5',status : 'PASS'},
 {marks : '90', id : 'M6',status : 'PASS'},
 {marks : '95', id : 'M7',status : 'PASS'},
 {marks : '67', id : 'M8',status : 'PASS'},
 {marks : '20', id : 'M9',status : 'FAIL'},
 {marks : '10', id : 'M10',status : 'FAIL'}
]
app.get('/',(req,res)=>{
 res.send('<center><h1 style = "color : red;">Welcome to STUDENT MARK status ! ! ! </h1><br><br/><h2>You can VIEW your MARKS and know your status</center>');
});
app.get('/lab',(req,res)=>
{
 res.send(lab);
});
//Get the status of the marks based on the ID.
app.get('/lab/:id',(req,res)=>
{
 const result = lab.find(x => x.id === req.params.id);
 if(!result)
 {
 res.status(404).send('<h3>Sorry please check marks ID, No marks with the given ID');
 }
 res.send(result.status);
});
//Adding a new marks
app.post('/add',(req,res)=>
{
var devi = req.body;
lab.push(devi);
res.send(lab);
});
//Update the status based on the marks id
app.put('/labu/:id',(req,res)=>
{
 const f = lab.find(x=>x.id === req.params.id);
 if(!f)
 {
 res.status(404).send('Sorry unable to find record');
 }
 //Updating status of the marks
 f.status = req.body.status;
 res.send(f);
});
//Deleting a marks for the given id
app.delete('/del/:id',(req,res)=>
{
 var p = req.params.id;
 const result = lab.find(x => x.id === p);
 if(!result)
 {
 res.status(404).send('<h3>Sorry please check marks ID, No marks with the given ID');
 }
 const ind = lab.indexOf(result);
 lab.splice(ind,1);
 res.send(lab);
});
var server = app.listen(5001,function(){
{
 var port = server.address().port;
 console.log("Application server listening on the port number : ",port);
}})

// Packages:
// npm init
// npm install express
// npm install nodemon

// GET:
// localhost:5001/
// localhost:5001/lab/
// localhost:5001/lab/M2
// localhost:5001/lab/M3
// POST:
// localhost:5001/add
// Body-{"marks" : "96", "id" : "M11","status" : "PASS"}
// localhost:5001/labu/M1
// Body-{
//     "status":"FAIL"
// }
// localhost:5001/lab/M1
// get:
// localhost:5001/lab/M1
// del:
// localhost:5001/del/M2

