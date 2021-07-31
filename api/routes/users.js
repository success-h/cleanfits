const router = require("express").Router();
const mongoose = require("mongoose");
const User = require("../models/User");

// @GET
// Return users
router.get("/users", (req, res) => {
  User.find({})
    .then(users => res.status(200).json({ success: true, users }))
    .catch(err =>
      res.status(404).json({ error: true, errorMessage: err.message })
    );
});

// @POST
// Add pricing to list of products
router.post("/users", (req, res) => {
  const { firstname, lastname, email, phone, address } = req.body;

  const user = new User({
    firstname,
    lastname,
    email,
    phone,
    address
  });

  user
    .save()
    .then(user =>
      res.status(201).json({
        success: true,
        successMessage: "User Created",
        user
      })
    )
    .catch(err => res.status(401).json({ error: true, message: err.message }));
});

module.exports = router;
