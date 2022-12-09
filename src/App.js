import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Home from './pages/Home';
import Play from './pages/Play';
import Resume from './pages/Resume';
import ResponsiveRedesign from './pages/projects/ResponsiveRedesign';
import IterativeDesign from './pages/projects/IterativeDesign';
import Development from './pages/projects/Development';
import Personas from './pages/projects/Personas';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
          <Route path="/play" element={<Play />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/responsive-redesign" element={<ResponsiveRedesign />} />
          <Route path="/iterative-design" element={<IterativeDesign />} />
          <Route path="/development" element={<Development />} />
          <Route path="/personas" element={<Personas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
