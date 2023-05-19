const mongoose = require("mongoose");

// Database Connection
mongoose.connect(process.env.DATABASE_URL);

// Shortcut variable to the Connection Object
const db = mongoose.connection;

// Listener for Connected Events
db.on("connected", function () {
  console.log(`Connected to MongoDB ${db.name} on ${db.host} port: ${db.port}`);
});
