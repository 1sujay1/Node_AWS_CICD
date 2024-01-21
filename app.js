const express = require("express");
require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "views", "welcome.html");
  res.sendFile(filePath);
});

app.get("/user", (req, res) => {
  var userData = [
    {
      name: "Rajesh",
      age: 26,
    },
    { name: "Ramesh", age: 25 },
  ];
  res.json({
    status: true,
    data: userData,
  });
});

const PORT = process.env.PORT || 6000;
const DD_URL = process.env.DD_URL;
mongoose
  .connect(DD_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MONGODB instance ", DD_URL);
    app.listen(PORT, () => {
      console.log("Listening to PORT ", PORT);
    });
  })
  .catch((err) => {
    console.log("Error connecting to DB ", err);
    process.exit();
  });
