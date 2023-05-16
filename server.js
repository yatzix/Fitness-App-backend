// Dependencies
const express = require("express");
const path = require("path");
// const favicon = require('serve-favicon');
const morgan = require("morgan");

// Initialize express app
const app = express();

// Configure settings
require("dotenv").config();
require("./config/database");

// Mount middleware
app.use(express.json()); // Creates req.body
app.use(morgan("dev"));
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));

// Use middleware to help express discover the favicon file
// app.use(express.static(path.join(__dirname, "build")));

// Mount Routes
// app.use(require("./config/checkToken"));

// API routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/data", require("./routes/api/data"));
// "Catch all route" - used to always serve index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Tell the App to Listen
const port = process.env.PORT || 3001;
app.listen(port, function () {
  console.log(`Express app is running on port:${port}`);
});
