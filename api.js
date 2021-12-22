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
        console.log("Connected...");
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
    console.log(req.body);
    payload = req.body;
    mongo.connect(url, (err, db) => {
        if (err) throw err;
        //console.log("Connected...");
        const dbo = db.db("userDetails");
        dbo.collection("signup").findOne({ email: payload.email,password:payload.password }, (err, data) => {
            if (data == null) {                    
                res.status(200).send({c:0});
            } else {
                res.status(200).send({c:1});
            }
            db.close();
        });

    })
})




app.listen(3001);