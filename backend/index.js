const express = require("express");
const app = express();
// app.use(express.json())

app.get("/",(req, res)=>{
    res.send("Hi there from backend");
})

app.listen(3000);
