import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chats from './components/Chats';
import Home from './components/Home';
// import Signup from './components/Signup';
import './App.css'; // Global styles for the app
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/chats" element={<Chats />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
