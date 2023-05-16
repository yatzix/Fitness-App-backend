const User = require("../../models/user");

async function create(req, res) {
  try {
    const foundUser = await User.findById(req.params.id);
    console.log(foundUser);
    foundUser.workouts.push(req.body);
    await foundUser.save();
  } catch (error) {
    console.error("Error saving data:", error);
    res.sendStatus(500);
  }
}

module.exports = {
  create,
};
