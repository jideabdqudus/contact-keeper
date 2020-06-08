const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

//Initialize Express
const app = express();

//Conncect DB
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define Routes

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

//Set Port
const PORT = process.env.PORT || 5000;

//Console run
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
