const express = require('express');
const app = express();
const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const cors = require('cors')
const bodyParser = require("body-parser");
let payload;
//let details;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.post('/signup', (req, res) => {
    //console.log(req.body);
    payload = req.body;
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        //console.log("Connected...");
        const dbo = db.db("userDetails");
        dbo.collection("signup").findOne({ email: payload.email }, (err, data) => {
            if (data == null) {
                dbo.collection("signup").insertOne({ name: payload.name, email: payload.email, password: payload.password }, (err, res) => {
                    if (err) throw err;
                    db.close();
                })
                res.status(200).send({res1:"Done"});
            } else {
                res.status(422).send({ res1: "User already exists" });
            }
        });

    })
    //console.log(payload.name)
})

app.post('/login', (req, res) => {
    //console.log(req.body);
    payload = req.body;
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        //console.log("Connected...");
        const dbo = db.db("userDetails");
        dbo.collection("signup").findOne({ email: payload.email,password:payload.password }, (err, data) => {
            if (data == null) {                    
                res.status(200).send({c:0});
            } else {
                res.status(200).send({c:1,name1:data.name});
            }
            db.close();
        });

    })
})

app.post('/createNew',(req,res)=>{
    //console.log(req.body.data123);
    //res.send(req.body.nodes);
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        //console.log("Connected...");
        const dbo = db.db("userDetails");
        dbo.collection("flowChart").insertOne({ nodes: req.body.data123.nodes,links:req.body.data123.links,mapT:req.body.mapT,mapN:req.body.mapN,mapA:req.body.mapA }, (err, data) => {
            if (err) {                    
                res.status(200).send({c:0});
            } else {
                res.status(200).send({c:1});
            }
            db.close();
        });

    })
})

app.post('/View', (req, res) => {
    //console.log(req.body);
    let payload = req.body;
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        //console.log("Connected...");
        const dbo = db.db("userDetails");
        dbo.collection("flowChart").find({mapN:payload.mapName}).toArray((err,data)=>{
            res.status(200).send(data)
        });

    })
})

app.post('/searchChart',(req,res)=>{
    let mapName = req.body.searchVal1;
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        //console.log("Connected...");
        const dbo = db.db("userDetails");
        dbo.collection("flowChart").find({mapN: mapName},{mapN:1,mapT:1,links:0,nodes:0}).toArray((err,data)=>{
            //console.log(data);
            if(data==null){
                res.status(200).send({error:'Invalid search'});
            }
            else{
                res.status(200).send(data)
            }
        })
    })
})

app.post('/homeDisplay',(req,res)=>{
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        //console.log("Connected...");
        const dbo = db.db("userDetails");
        dbo.collection("flowChart").find({},{mapN:1,mapT:1}).limit(4).toArray((err,data)=>{
            //console.log(data);
            if(data==null){
                res.status(200).send({error:'Invalid search'});
            }
            else{
                res.status(200).send(data)
            }
        })
    })
})


app.listen(3001);