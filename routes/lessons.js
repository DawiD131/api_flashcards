const express = require("express");
const router = express.Router();

const lessonControllers = require("../controllers/lessons");

router.post("/create_new_lesson", lessonControllers.create_new_lesson);
router.delete("/delete_lesson/:lesson", lessonControllers.delete_lesson);
router.get("/get_lessons", lessonControllers.get_lessons);
router.get("/get_lessons_with_words", lessonControllers.get_lessons_with_words);

module.exports = router;
