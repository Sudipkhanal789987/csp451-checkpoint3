module.exports = router;
router.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      error: "Student not found",
    });
  }

  res.json(student);
});
