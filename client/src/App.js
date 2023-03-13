import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './pages/authentication/Authentication';
import Home from './pages/home/Home';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth" element={<Authentication/>} />
      </Routes>
    </Router>
  );
}

export default App;
