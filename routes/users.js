const express = require("express");
const router = express.Router();

// @ route  POST api/users
//@desc     Register a user
//@access   Public

//Registerin a user, hence a post request.
router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
