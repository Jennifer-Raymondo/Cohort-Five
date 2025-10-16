const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  course: String,
  entryScheme: String,
  intake: String,
  sponsorship: String,
  gender: String,
  dob: Date,
  residence: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Student', studentSchema);
