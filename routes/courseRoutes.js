const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

router.get("/", getCourses);

router.get("/:id", getCourse);

router.post("/", upload.single("image"), createCourse);

router.put("/:id", upload.single("image"), updateCourse);

router.delete("/:id", deleteCourse);

module.exports = router;
