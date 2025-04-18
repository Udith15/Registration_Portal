import './App.css';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Registernow from './pages/Registernow';
import Loginpage from './pages/Loginpage';
import Homepage from './pages/Homepage';
import Mainpage from './pages/Mainpage';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import RegEvent from './pages/RegEvent';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registernow />} />
        <Route path="/main" element={<Mainpage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/eventregister" element={<RegEvent />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
