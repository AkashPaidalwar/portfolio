const { Console } = require("console");
const express = require("express");
const Recruiter = require("./RecruiterModel");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newRecruiter = new Recruiter({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      message: req.body.message,
    });
    const recruiter = await newRecruiter.save();
    res.status(200).json(recruiter);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
