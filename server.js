const express = require("express");

//Initialize Express
const app = express();

//Sending data to the PORT
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Contact-Kepper API" })
);

//Set Port
const PORT = process.env.PORT || 5000;

//Console run
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
