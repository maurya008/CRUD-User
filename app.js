require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/database");
const userRoutes = require("./routes/userRoute");
const app = express();

// Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDB();

app.get("/", userRoutes);
app.post("/createUser", userRoutes);
// app.put("/editUser/:id", userRoutes);

module.exports = app;