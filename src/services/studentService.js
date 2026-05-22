function validateStudentInput(data) {
  const errors = [];

  if (!data.name || data.name.trim().length < 2) {
    errors.push("Student name must be at least 2 characters.");
  }

  if (!data.program || data.program.trim().length < 2) {
    errors.push("Program must be at least 2 characters.");
  }

  return errors;
}

function createStudent(data, students) {
  return {
    id: students.length + 1,
    name: data.name.trim(),
    program: data.program.trim(),
    createdAt: new Date().toISOString(),
  };
}

module.exports = {
  validateStudentInput,
  createStudent,
};
