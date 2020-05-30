const express = require("express");
const connectDB = require("./config/db");

//Initialize Express
const app = express();

//Conncect DB
connectDB();

//Sending data to the PORT
app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Contact-Kepper API" })
);

//Define Routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

//Set Port
const PORT = process.env.PORT || 5000;

//Console run
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
