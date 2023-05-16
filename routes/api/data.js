const express = require("express");
const router = express.Router();
const dataCtrl = require("../../controllers/api/users");

// POST /api/users
router.post("/WorkOuts", dataCtrl.create);

module.exports = router;
