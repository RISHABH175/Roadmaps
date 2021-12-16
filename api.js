const express = require('express');
const app = express();
const mongo = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const cors = require('cors')
const bodyParser = require("body-parser");
//let payload;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.post('/signup',(req,res)=>{
    console.log(req.body);
})


mongo.connect(url,(err,db)=>{
    if(err) throw err;
    console.log("Connected...");
     const dbo = db.db("userDetails");
    // dbo.collection("nodeCollection",(err,res)=>{
    //     if(err) throw err;
    //     console.log('collection created');
    //     db.close();
    // });
    // dbo.collection("signup").insertOne(details,(err,res)=>{
    //     if(err) throw err;
    //     //console.log(res.insertedCount);
    //     db.close();
    // });
    // dbo.collection("nodeCollection").find({}).toArray((err,data)=>{
    //     if(err) throw err;
    //     console.log(data);
    //     db.close();
    // });
    // dbo.collection("nodeCollection").findOne({"name":"Hey"},(err,data)=>{
    //     if(err) throw err;
    //     console.log(data);
    //     db.close();
    // });
})

app.listen(3001);