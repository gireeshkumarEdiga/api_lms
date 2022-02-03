const express = require("express");
const connect = require("../routes/db.config");

const app = require("../app");

app.use(3000,async() => {
    await connect()
    console.log("running on port 3000");
})