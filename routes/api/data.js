const express = require("express");
const router = express.Router();
const dataCtrl = require("../../controllers/api/data");

// POST /api/users
router.post("/", dataCtrl.create);
router.get("/", dataCtrl.getAll);

module.exports = router;
