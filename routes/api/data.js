const express = require("express");
const router = express.Router();
const dataCtrl = require("../../controllers/api/data");
// const bodyParser = require("body-parser");
// const jsonParser = bodyParser.json();

// POST /api/users
<<<<<<< HEAD
router.post("/users/:id/workouts", dataCtrl.create);
=======
router.post("/", dataCtrl.create);
>>>>>>> 4bf075ffb9f4c13ce041a9e6b03d52cdd356e22c

module.exports = router;
