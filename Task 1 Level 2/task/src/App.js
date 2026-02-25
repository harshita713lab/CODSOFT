import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import PostJob from './pages/PostJob'; // 👈 Naya page import kiya

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav style={{ padding: '20px', backgroundColor: '#2c3e50', color: 'white', display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>🏠 Home</Link>
          <Link to="/jobs" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>💼 Find Jobs</Link>
          <Link to="/post-job" style={{ color: '#f39c12', textDecoration: 'none', fontSize: '18px', fontWeight: 'bold' }}>➕ Post a Job</Link>
        </nav>

        {/* Pages (Routes) */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/post-job" element={<PostJob />} /> {/* 👈 Naya rasta (route) banaya */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;