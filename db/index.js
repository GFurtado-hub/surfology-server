// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/surfology";

  console.log("🚀 MONGO_URI being used:", MONGO_URI); // 👈 Add this line

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
  })
  .catch((err) => {
    console.error("❌ Error connecting to MongoDB:");
    console.error(err.message);
    console.error(err.stack);
  });