const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User.js");

// @ route  POST api/users
//@desc     Register a user
//@access   Public

//Registerin a user, hence a post request.
router.post(
  "/",
  [
    check("name", "Please enter a name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enteer a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errrors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send("Passed");
  }
);

module.exports = router;
