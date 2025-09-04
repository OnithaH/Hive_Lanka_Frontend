import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Forum from './pages/Forum';
import Donate from './pages/Donate';
import Tutorial from './pages/Tutorial';
import Event from './pages/Event';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
// import other pages...

function App() {
  return (
    <Router>
      <Header />          {/* includes Outlet */}
      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/home" element={<Home />} />}
        {<Route path="/shop" element={<Shop />} />}
        {<Route path="/fundraising" element={<Donate />} />}
        {<Route path="/forum" element={<Forum />} />}
        {<Route path="/tutorials" element={<Tutorial />} />}
        {<Route path="/events" element={<Event />} />}
        {<Route path="/about" element={<AboutUs />} />}
        {<Route path="/contact" element={<Contact />} />}
        {<Route path="/faq" element={<Faq />} />}
        {/* ...other routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
