const express = require('express');
const bodyParser = require('body-parser')
const app = express();
app.get('/favicon.ico',function(req,res){
    res.end();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req,res){
    const data ={};
    data.path = req.path;
    data.method = req.method;
    // data.header = req.header;
    data.headers = {host:req.headers.host};
    data.params = req.params;
    data.query = req.query;
    data.body = req.body;
    data.time= new Date().getTime();
    console.log(data);
    console.log('--------------------------------------');
   
    res.send(data);
});

app.listen(7002);