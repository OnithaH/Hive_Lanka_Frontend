import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './Pages/home';
import Shop from './Pages/shop';
import Donate from './Pages/donate';
import Forum from './Pages/forum';
import Tutorial from './Pages/tutorial';
import Event from './Pages/event';
import Contact from './Pages/contact';
import AboutUs from './Pages/aboutus';
import FAQ from './Pages/faq';
// import other pages...

function App() {
  return (
    <Router>
      <Header />          {/* includes Outlet */}
      <Routes>
        <Route path="/" element={<Home />} />
        {<Route path="/home" element={<Home />} />}
        {<Route path="/shop" element={<Shop />} />}
        {<Route path="/donate" element={<Donate />} />}
        {<Route path="/forum" element={<Forum />} />}
        {<Route path="/tutorial" element={<Tutorial />} />}
        {<Route path="/event" element={<Event />} />}
        {<Route path="/aboutus" element={<AboutUs />} />}
        {<Route path="/contact" element={<Contact />} />}
        {<Route path="/faq" element={<FAQ />} />}
        {/* ...other routes */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
