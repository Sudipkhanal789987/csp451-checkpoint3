function validateLogin(username, password) {
  const errors = [];

  if (!username || username.trim().length < 3) {
    errors.push("Username must be at least 3 characters");
  }

  if (!password || password.length < 6) {
    errors.push("Password must be at least 6 characters");
  }

  return errors;
}

module.exports = {
  validateLogin,
};
