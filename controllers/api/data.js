const User = require("../../models/user");
// const bodyParser = require("body-parser");
// const jsonParser = bodyParser.json();

async function create(req, res) {
  try {
    console.log("req", req);
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
