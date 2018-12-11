require("dotenv").config();
var mongoose = require("mongoose");
mongoose.connect(process.env.MLAB_URL);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("mongoosy~~");
});

var favoriteSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: String,
  style: {},
  labels: {},
  abv: String
});

var favorite = mongoose.model("favorite", favoriteSchema);

module.exports = favorite;
