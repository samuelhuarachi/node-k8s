const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose');
const ServiceUser = require("./services/ServiceUser")

mongoose.connect('mongodb://mongo-service:27017/node1bd');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    console.log("mongo connection opened");
});

console.log("hereee");


app.get('/', (req, res) => {

    const serviceUser = new ServiceUser()
    serviceUser.create()
    serviceUser.somenthing()


    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})