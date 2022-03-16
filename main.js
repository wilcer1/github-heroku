const express = require("express");

const app = express();

app.use(express.static("client"));

app.use(express.json());

const PORT = process.env.PORT || 5342;

app.listen(PORT, () =>{
    console.log("server running on port " + PORT);
});