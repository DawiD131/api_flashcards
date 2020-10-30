const express = require("express");
const router = express.Router();

const wordsController = require("../controllers/words");

router.delete("/delete_word", wordsController.delete_word);
router.get("/get_words/:lesson", wordsController.get_words);
router.post("/save_word", wordsController.save_word);
router.put("/update_word_status", wordsController.update_word_status);

module.exports = router;
