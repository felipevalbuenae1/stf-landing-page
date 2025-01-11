import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CustomTabs from './components/Tabs';
// import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabs" element={<CustomTabs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;