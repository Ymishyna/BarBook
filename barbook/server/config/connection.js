const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://yana92:Password@cluster0.kljl2og.mongodb.net/barbook?retryWrites=true&w=majority&appName=Cluster0"
);

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/barbook');

module.exports = mongoose.connection;
