const Course = require("../models/Course");

// GET ALL COURSES
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET SINGLE COURSE
const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CREATE COURSE
const createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      title: req.body.title,
      price: req.body.price,
      instructor: req.body.instructor,
      image: req.file
        ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
        : null
    });

    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE COURSE
const updateCourse = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      price: req.body.price,
      instructor: req.body.instructor
    };

    if (req.file) {
      updateData.image =
        `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    const course = await Course.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE COURSE
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.status(200).json({
      message: "Course deleted successfully"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse
};