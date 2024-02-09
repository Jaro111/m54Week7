const mongoose = require("mongoose");

const connection = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("connection DB is working");
};

module.exports = connection;
