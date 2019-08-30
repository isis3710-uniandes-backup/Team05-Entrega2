const express = require("express");
const router = express.Router();

const User = require("../models/user");

/**
 * GET ALL
 */
router.get("/", async (req, res) => {
  try {
    const users =  await User.find();
    res.json(users);
  } catch(err) {
    res.status(500).json({message: err.message})
  }
});

/**
 * GET ONE
 */
router.get("/:id", get_user, async (req, res) => {
  res.json(res.user.name);
});

/**
 * POST
 */
router.post("/", async (req, res) => {
  try {
    const new_user = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username
    });
    let saved_user = await new_user.save();
    res.status(201).json(saved_user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * PATCH - UPDATE
 */
router.patch("/:id", get_user, async (req, res) => {
  if (req.body.name) {
    res.user.name = req.body.name;
  }
  if (req.body.email) {
    res.user.email = req.body.email;
  }
  if (req.body.username) {
    res.user.username = req.body.username;
  }
  try {
    const updated_user = await res.user.save();
    res.json(updated_user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/**
 * DELETE
 */
router.delete("/:id", get_user, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "User Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/**
 * Middleware
 */
async function get_user(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .json({ message: `User ${req.params.id} does not exist` });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

/**
 * ? Export
 */
module.exports = router;
