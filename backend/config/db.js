const mongoose = require("mongoose")
require("dotenv").config()
async function ConnectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Database Connected")
  } catch (err) {
    console.log(err.message)
  }
}
module.exports = ConnectDatabase
