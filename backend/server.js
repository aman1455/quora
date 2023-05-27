const express = require("express")
const cors = require("cors")
const ConnectDatabase = require("./config/db")
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3001, async () => {
  await ConnectDatabase()
  console.log("Server Connected")
})
