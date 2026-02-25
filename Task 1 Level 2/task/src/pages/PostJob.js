import React, { useState } from 'react';

function PostJob() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Page ko refresh hone se rokna
    
    // Backend ko data bhej rahe hain (API Call)
    const response = await fetch('http://localhost:5000/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('YAY! 🎉 Job Posted Successfully in MongoDB!');
      setFormData({ title: '', company: '', location: '', salary: '' }); // Form clear karna
    } else {
      alert('Oh no! 🔴 Failed to post job.');
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Post a New Job 📝</h1>
      <p style={{ color: 'gray' }}>Fill out the details below to add a job to the database.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '20px auto', gap: '15px' }}>
        <input type="text" name="title" placeholder="Job Title (e.g. React Developer)" value={formData.title} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="text" name="location" placeholder="Location (e.g. Remote, New York)" value={formData.location} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
        <input type="text" name="salary" placeholder="Salary (e.g. $80k - $100k)" value={formData.salary} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc' }} />
        
        <button type="submit" style={{ padding: '15px', backgroundColor: '#2ecc71', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}>
          Submit Job
        </button>
      </form>
    </div>
  );
}

export default PostJob;