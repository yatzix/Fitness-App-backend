const User = require("../../models/user");
// const bodyParser = require("body-parser");
// const jsonParser = bodyParser.json();

async function create(req, res) {
  try {
<<<<<<< HEAD
    // console.log("req", req);
    const foundUser = await User.findById(req.headers.user);
    console.log("user found", foundUser);
    foundUser.workouts.push(req.body);
=======
    const { userId, workout } = req.body; // Get userId and workout from the request body

    if (!userId || !workout) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const foundUser = await User.findById(userId);
    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    foundUser.workouts.push({ exercise: workout }); // Push a new workout object into the workouts array
>>>>>>> 87187b775c8a8b070779faf5f73d5a36507eb0f2
    await foundUser.save();

    res.status(200).json({ message: "Workout added successfully", foundUser });
  } catch (error) {
    console.error("Error saving data:", error);
    res.sendStatus(500);
  }
}

module.exports = {
  create,
};
