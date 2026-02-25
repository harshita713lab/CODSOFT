import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <div style={{ 
        backgroundColor: '#2c3e50', 
        color: 'white', 
        padding: '100px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '50px', marginBottom: '20px' }}>Find Your Dream Job Today 🚀</h1>
        <p style={{ fontSize: '20px', marginBottom: '40px', color: '#bdc3c7' }}>
          Connect with top companies and take the next big step in your career.
        </p>
        
        <Link to="/jobs">
          <button style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            padding: '15px 30px',
            fontSize: '18px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '30px',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s'
          }}>
            Explore Jobs Now
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-around', 
        padding: '60px 20px', 
        backgroundColor: '#f4f7f6',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: '40px', margin: '0' }}>📝</h1>
          <h3>Easy Apply</h3>
          <p style={{ color: '#7f8c8d' }}>Apply to thousands of jobs with just one simple click.</p>
        </div>
        <div style={{ textAlign: 'center', maxWidth: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: '40px', margin: '0' }}>🏢</h1>
          <h3>Top Companies</h3>
          <p style={{ color: '#7f8c8d' }}>We partner with the best tech companies around the globe.</p>
        </div>
        <div style={{ textAlign: 'center', maxWidth: '300px', padding: '20px', backgroundColor: 'white', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
          <h1 style={{ fontSize: '40px', margin: '0' }}>🔒</h1>
          <h3>Secure Search</h3>
          <p style={{ color: '#7f8c8d' }}>Your data and resume are kept completely private and secure.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;