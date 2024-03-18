const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log(
      `Database host is: ${connectionInstance.connections[0].host}\nDatabase server runnig on port: --${connectionInstance.connections[0].port}`
    );
  } catch (error) {
    console.log(`MongoDB connection failed: `, error);
    process.exit(1);
  }
};

module.exports = connectDB;
