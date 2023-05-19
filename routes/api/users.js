// routes/api/users.js

const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const { raw } = require("body-parser");
// require authorization middleware
// const ensureLoggedIn = require("../../config/ensureLoggedIn");
router.get("/test", (req, res) => {
  res.send("testing");
});

router.get("/", usersCtrl.login);
// POST /api/users
router.post("/", usersCtrl.create);
// router.post("/data", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.get("/check-token", usersCtrl.checkToken);

// Insert ensureLoggedIn on all routes that need protecting
// router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
