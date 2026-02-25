const mongoose = require('mongoose');

// Yeh humara Blueprint hai (Job kaisi dikhegi)
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: String, required: true }
});

// Is blueprint ko export kar rahe hain taaki humari server file iska use kar sake
module.exports = mongoose.model('Job', jobSchema);