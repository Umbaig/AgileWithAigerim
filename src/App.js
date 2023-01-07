import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import ResponsiveAppBar from './components/appBar'
import CourseAndBonus from './pages/courseandbonus';
import OnlineConsultation from './pages/consultation';
import Background from './components/background';
import { AnimatePresence } from "framer-motion";
import Footer from './components/footer';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({behavior: 'smooth', top: 0})
  }, [location])

  return (
    <>
      <Background />
      <ResponsiveAppBar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/onlineconsultation" element={<OnlineConsultation />} />
          <Route path="/courseandbonus" element={<CourseAndBonus />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      {/* <R3fDemo /> */}
    </>
  );
}

export default App;