import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Pages
import Homepage from './components/pages/Homepage.jsx';
import PrivacyPolicy from './components/pages/PrivacyPolicy.jsx';
import Cookies from './components/pages/Cookies.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookies" element={<Cookies />} />
      </Routes>
    </Router>
  );
}

export default App;