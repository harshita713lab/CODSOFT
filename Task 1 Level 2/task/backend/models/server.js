const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Humara Job Model Import kar rahe hain
const Job = require('./models/Job'); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully! 🟢'))
  .catch((err) => console.log('MongoDB Connection Failed! 🔴', err));

// 1. GET Route: Test karne ke liye
app.get('/', (req, res) => {
  res.send('Hello from the Job Board Backend! 🚀');
});

// 2. POST Route: Nayi Job Database mein Save karne ke liye
app.post('/api/jobs', async (req, res) => {
  try {
    const newJob = new Job(req.body); // Frontend se jo data aayega usse nayi job banegi
    await newJob.save(); // Database mein save karna
    res.status(201).json({ message: 'Job successfully created! 🎉', job: newJob });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create job' });
  }
});

// Server Start
app.listen(PORT, () => {
  console.log(`Backend server is running perfectly on port ${PORT}`);
});