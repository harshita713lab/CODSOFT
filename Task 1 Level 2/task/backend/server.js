const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Job = require('./models/Job'); 

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected Successfully! 🟢'))
  .catch((err) => console.log('MongoDB Connection Failed! 🔴', err));

app.get('/', (req, res) => {
  res.send('Hello from the Job Board Backend! 🚀');
});

app.post('/api/jobs', async (req, res) => {
  try {
    const newJob = new Job(req.body); 
    await newJob.save(); 
    res.status(201).json({ message: 'Job successfully created! 🎉', job: newJob });
  } catch (error) {
    console.log("🔴 JOB SAVE ERROR:", error);
    res.status(500).json({ error: 'Failed to create job' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running perfectly on port ${PORT}`);
});