const express = require("express");
const app = express();
const accomodationRouter = require("./routes/AccommodationRoutes");
const mongoose = require("mongoose");
require('dotenv').config()

app.use(express.json());
app.use("/api/accommodations", accomodationRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

async function connectToDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected');
  } catch (err) {
    console.error('Connection error', err);
  }
}

connectToDatabase();

module.exports = app;