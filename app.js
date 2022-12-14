require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/database");
const userRoutes = require("./routes/userRoute");
const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.use("/", userRoutes);   //use my home route and then use any route post put delete etc

module.exports = app;