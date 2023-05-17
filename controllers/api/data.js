const User = require("../../models/user");

async function create(req, res) {
  try {
    console.log("req.body", req.body);
    const foundUser = await User.findById(req.params.id);
    console.log(foundUser);

    if (foundUser) {
      foundUser.workouts.push(req.body);
      await foundUser.save();
      res.sendStatus(200);
    } else {
      console.error('User not found.');
      res.sendStatus(404);
    }

  } catch (error) {
    console.error("Error saving data:", error);
    res.sendStatus(500);
  }
}
   


module.exports = {
  create,
};
