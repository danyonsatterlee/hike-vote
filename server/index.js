let mongoose = require("mongoose");
const express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let voteRouter = require("./routes/votes.js");
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.use("/votes",voteRouter)

app.listen(port,()=>{
    console.log(`listening to ${port}`)
});

mongoose.connect("mongodb://localhost:27017/votes");