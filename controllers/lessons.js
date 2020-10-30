const Words = require("../models/words");

exports.create_new_lesson = (req, res) => {
  var word = new Words({
    lesson: req.body.lesson.trim(),
    words: [],
  });

  word.save(function (err) {
    res.end();
  });
};

exports.delete_lesson = (req, res) => {
  const query = {
    lesson: req.params.lesson,
  };

  Words.findOneAndDelete(query, function (err, doc) {
    if (err) return res.send(500, { error: err });
    return res.send("Succesfully deleted.");
  });
};

exports.get_lessons_with_words = (req, res, next) => {
  Words.find(function (err, data) {
    if (err) return res.send(500, { error: err });
    return res.send(data);
  });
};

exports.get_lessons = (req, res, next) => {
  Words.find(function (err, data) {
    if (err) return res.send(500, { error: err });
    return res.send(
      data.map((words) => {
        return words.lesson;
      })
    );
  });
};
