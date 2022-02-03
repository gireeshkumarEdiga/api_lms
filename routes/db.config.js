const express = require("express");
const { model } = require("mongoose");

const connect = () => {
    express.connect("mongodb://127.0.0.1:27017/girish")
}

model.exports = connect