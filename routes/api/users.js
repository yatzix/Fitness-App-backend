// routes/api/users.js

const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const { raw } = require("body-parser");
// require authorization middleware
// const ensureLoggedIn = require("../../config/ensureLoggedIn");
router.get("/test", (req, res) => {
  res.send("testing233e");
});
router.get("/test", (req, res) => {
  res.send("testing233e");
});
router.get("/:muscle", async (req, res) => {
  try {
    const api_key = process.env.REACT_APP_API_KEY;
    const api_url =
      "https://api.api-ninjas.com/v1/exercises?muscle=" + req.params.muscle;
    const response = await fetch(api_url, {
      headers: {
        "X-Api-Key": api_key,
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      res.send(responseData);
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    console.error(error);
  }
});
// router.get("/", usersCtrl.login);
// POST /api/users
router.post("/", usersCtrl.create);
// router.post("/data", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.get("/login", usersCtrl.login);
router.get("/check-token", usersCtrl.checkToken);

// Insert ensureLoggedIn on all routes that need protecting
// router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
