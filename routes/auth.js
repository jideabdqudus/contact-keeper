const express = require("express");
const router = express.Router();

// @ route  GET api/auth
//@desc     Get logged in user
//@access   Private

//Registerin a user, hence a post request.
router.get("/", (req, res) => {
  res.send("Get logged in User");
});

//@ route   POST api/auth
//@desc     Auth user and get token
//@access   Public

//Log in a user, hence a post request.
router.post("/", (req, res) => {
  res.send("log in User");
});

module.exports = router;
