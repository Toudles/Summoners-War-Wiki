import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Background from './Background.jsx'; 
import Homepage from './Homepage.jsx'; 
import Dungeons from './Dungeons.jsx';
import Arena from './Arena.jsx';
import Guild from './Guild.jsx';
import RiftRaids from './RiftRaids.jsx';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main homepage route */}
        <Route path="/" element={<Background><Homepage /></Background>} />
        
        <Route path="/Dungeons" element={<Background title="Dungeons"><Dungeons /></Background>} />
        <Route path="/Arena" element={<Background title="Arena"><Arena /></Background>} />
        <Route path="/Guild" element={<Background title="Guild"><Guild /></Background>} />
        <Route path="/RiftRaids" element={<Background title="RiftRaids"><RiftRaids /></Background>} />
        {/* Additional routes for other pages */}
        
      </Routes>
    </Router>
  );
}

export default App;
