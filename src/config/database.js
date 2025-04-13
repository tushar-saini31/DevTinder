const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB with:", process.env.DB_CONNECTION_SECRET_KEY);

    await mongoose.connect(process.env.DB_CONNECTION_SECRET_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connection established successfully!");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

module.exports = connectDB;
