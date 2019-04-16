const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  username:{
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  date: {
    type: Date,
    trim: true,
    default: Date.now
  },
  isVerified: {
    type:Boolean,
    default:false
  }

});
module.exports = User = mongoose.model("users", UserSchema);

