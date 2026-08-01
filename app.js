const express = require("express");
const path = require("path");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const courseRoutes = require("./routes/courseRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

app.use(logger);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/courses", courseRoutes);

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to StudyStack API");
});

app.use(errorHandler);

module.exports = app;

