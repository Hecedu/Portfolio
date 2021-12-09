import './Custom.scss';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as _, Routes, Route } from "react-router-dom";
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
