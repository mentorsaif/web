var connect = require('connect');
var express = require('express');
var http = require('http');
 
var app = connect();
 
// parse urlencoded request bodies into req.body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
 
// respond to all requests
// app.use(function(req, res){
  // res.end('Hello from Connect!\n');
// });
 
app.use(express.static('../MyAngularJs')) 
 
//create node.js http server and listen on port
http.createServer(app).listen(5000);