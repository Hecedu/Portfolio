import './Custom.scss';
import NavBar from './Components/NavBar/NavBar';
import React, { useRef } from 'react';
import PresentationCard from './Components/Cards/PresentationCard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Views/HomePage';
import BlogView from './Views/BlogView';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogView />} />
      </Routes>
    </>
  );
}

export default App;
