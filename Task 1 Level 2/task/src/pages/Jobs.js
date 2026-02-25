import React, { useState } from 'react';

function Jobs() {
  // 1. Job Data
  const [jobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Google', location: 'Remote', salary: '$70k - $90k' },
    { id: 2, title: 'Backend Engineer', company: 'Microsoft', location: 'New York', salary: '$85k - $110k' },
    { id: 3, title: 'UI/UX Designer', company: 'Spotify', location: 'London', salary: '$60k - $80k' },
    { id: 4, title: 'Data Scientist', company: 'Amazon', location: 'Seattle', salary: '$100k - $130k' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '40px', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '10px' }}>💼 Latest Job Openings</h1>
      
      {/* 🔍 Search Bar Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <input 
          type="text" 
          placeholder="Search jobs by title (e.g., Frontend)..." 
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '12px 20px',
            width: '60%',
            maxWidth: '500px',
            borderRadius: '25px',
            border: '2px solid #bdc3c7',
            fontSize: '16px',
            outline: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
          }}
        />
      </div>

      {/* 📇 Job Cards Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '25px', justifyContent: 'center' }}>
        
        {/* Ab hum 'jobs' ki jagah 'filteredJobs' par map karenge */}
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} style={{ 
              backgroundColor: 'white', 
              padding: '20px', 
              borderRadius: '15px', 
              width: '300px', 
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            }}>
              <h2 style={{ margin: '0 0 15px 0', color: '#e74c3c' }}>{job.title}</h2>
              <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>🏢 Company:</strong> {job.company}</p>
              <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>📍 Location:</strong> {job.location}</p>
              <p style={{ margin: '5px 0', fontSize: '16px' }}><strong>💰 Salary:</strong> {job.salary}</p>
              
              <button style={{ 
                width: '100%', padding: '12px', backgroundColor: '#2c3e50', 
                color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', 
                marginTop: '15px', fontWeight: 'bold', fontSize: '16px'
              }}>
                Apply Now
              </button>
            </div>
          ))
        ) : (
          <h3 style={{ color: '#7f8c8d' }}>No jobs found! Try a different search. 🕵️‍♀️</h3>
        )}

      </div>
    </div>
  );
}

export default Jobs;