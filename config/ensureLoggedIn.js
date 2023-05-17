module.exports = function (req, res, next) {
  if (!req.user) return res.status(401).json("Unauthorized");
  next();
};

// makes sure that user is present in the request object. if req.user returns null (no user), sent back a 401 (unauthorized)
