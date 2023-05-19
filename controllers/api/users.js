// const user = require("../../models/user");
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    // 1) create the user
    const user = await User.create(req.body);
    // 2) create the japiwt by passing in the user info for the jwt payload
    const token = createJWT(user);
    // 3) send the new jwt to the client using res.json
    res.json(token);
  } catch (error) {
    // if error, we'll send the error to the client
    res.status(400).json(error); // 400 status = bad request
  }
}

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
  // jwt.sign() is a special method that does two things: creates a json web token with a provided payload, server secret and optional settings. 2nd: cryptographically signs te token with the provided secret so it can be validated later
  // {user} is the payload? using shorthand syntax of {user: user}
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ error: "invalid request" });

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).json({ error: "invalid data" });

    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

// async function login(req, res) {
//   try {
//     const user = await User.findOne({ email: req.body.email });
//     if (!user) return res.status(400).json({ error: "invalid credentials" });

//     const isMatch = await bcrypt.compare(req.body.password, user.password);
//     if (!isMatch) return res.status(400).json({ error: "invalid credentials" });

//     const token = createJWT(user);
//     res.json(token);
//   } catch (error) {
//     res.status(400).json(error);
//   }
// }

function checkToken(req, res) {
  //req.user will always be there for you when a token is sent
  console.log("req.user ", req.user);
  res.json(req.exp);
}

module.exports = {
  create,
  login,
  checkToken,
};
//res.json() is a method of the response object (res) that parses the user data as json and sends it as the response to the client
