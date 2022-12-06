
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const express = require('express');
const app = express();
require("dotenv").config({path: path.resolve(__dirname, 'dontPost/.env')});
const { MongoClient, ServerApiVersion } = require('mongodb');
const { createListing } = require('./mongoFns');
const userName = process.env.MONGO_DB_USERNAME;
const passWord = process.env.MONGO_DB_PASSWORD;

const uri = `mongodb+srv://${userName}:${passWord}@cluster.syod2ua.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: 
    true, serverApi: ServerApiVersion.v1 });

const portNumber = process.env.PORT || 4000;

app.set("views", path.resolve(__dirname, "templates"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:false}));
 
process.stdin.setEncoding('utf-8');

/*Routes*/

app.get('/', (req, res) => {
    res.send('connected to server');
});

app.post('/contact', async (req, res) => {
    const variables = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    }

    await createListing(client, variables).catch(console.error);
    res.render("contact", variables);
})

app.listen(portNumber, ()=> {
    console.log(`Server listening on port ${portNumber}`);
})