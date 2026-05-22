const express = require("express");

const router = express.Router();

const students = [];

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "csp451-web-starter",
    timestamp: new Date().toISOString(),
  });
});

router.get("/students", (req, res) => {
  res.json({
    count: students.length,
    students,
  });
});

router.post("/students", (req, res) => {
  const { name, program } = req.body;

  if (!name || !program) {
    return res.status(400).json({
      error: "Name and program are required.",
    });
  }

  const student = {
    id: students.length + 1,
    name: name.trim(),
    program: program.trim(),
    createdAt: new Date().toISOString(),
  };

  students.push(student);

  return res.status(201).json({
    message: "Student created successfully.",
    student,
  });
});

module.exports = router;
