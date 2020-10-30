var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var wordsSchema = new Schema({
  lesson: { type: String, required: true },
  words: { type: Object },
});

module.exports = mongoose.model("Words", wordsSchema);
