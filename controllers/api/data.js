const User = require("../../models/user");

async function create(req, res) {
  try {
    // console.log("req", req);
    const foundUser = await User.findById(req.headers.user);
    console.log("user found", foundUser);
    foundUser.workouts.push(req.body);
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
