const express = require("express");
const router = express.Router();
const dataCtrl = require("../../controllers/api/data");
// const bodyParser = require("body-parser");
// const jsonParser = bodyParser.json();

// POST /api/users
router.post("/", dataCtrl.create);

module.exports = router;
