
const mongoose = require("mongoose");


const mySchema = mongoose.Schema({
  name: String,
  email: String,
  password: String
});


const Myuser = mongoose.model("Myuser", mySchema);

module.exports = Myuser;