const mongoose = require('mongoose');
const config = require('config');
require('dotenv').config();

const db = process.env.MONGO_URI || config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
