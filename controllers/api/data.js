const User = require("../../models/user");

async function create(req, res) {
  try {
    const { userId, workout } = req.body; // Get userId and workout from the request body

    if (!userId || !workout) {
      return res.status(400).json({ message: "Invalid request data" });
    }

    const foundUser = await User.findById(userId);
    if (!foundUser) {
      return res.status(404).json({ message: "User not found" });
    }

    foundUser.workouts.push({ exercise: workout }); // Push a new workout object into the workouts array
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
