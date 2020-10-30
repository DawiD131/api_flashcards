const Words = require("../models/words");

exports.delete_word = (req, res, next) => {
  let index = 0;
  const WordToDelete = {
    word: req.body.word,
    translation: req.body.translation,
  };

  const query = { lesson: req.body.lesson };

  Words.findOne(query, function (err, data) {
    console.log(data.words);
    data.words.map((item, id) => {
      if (
        item.word === req.body.word &&
        item.translation === req.body.translation
      ) {
        index = id;
      }
    });

    data.words.splice(index, 1);

    console.log(data.words);
    Words.findOneAndUpdate(query, { words: data.words }, function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully deleted.");
    });
  });
};

exports.get_words = (req, res, next) => {
  Words.findOne({ lesson: req.params.lesson }, function (err, data) {
    if (err) return res.send(500, { error: err });
    return res.send(JSON.stringify(data));
  });
};

exports.save_word = (req, res, next) => {
  let newWord = {
    word: req.body.word,
    translation: req.body.translation,
    isLearned: req.body.isLearned,
  };

  const query = { lesson: req.body.lesson };

  Words.findOne(query, function (err, data) {
    data.words.push(newWord);

    console.log(data.words);
    Words.findOneAndUpdate(
      query,
      { words: data.words },
      { upsert: true },
      function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send("Succesfully saved.");
      }
    );
  });
};

exports.update_word_status = (req, res, next) => {
  let newWord = {
    word: req.body.word,
    translate: req.body.translation,
  };

  const query = { lesson: req.body.lesson };
  console.log(req.body);

  Words.findOne(query, function (err, data) {
    data.words.map((item) => {
      if (req.body.word === item.word) {
        item.isLearned = req.body.isLearned;
      } else return item;
    });

    console.log(data.words);
    Words.findOneAndUpdate(query, { words: data.words }, function (err, doc) {
      if (err) return res.send(500, { error: err });
      return res.send("Succesfully saved.");
    });
  });
};
