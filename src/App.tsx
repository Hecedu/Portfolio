import './Custom.scss';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import { Routes, Route } from "react-router-dom";
import HomePage from './Views/HomePage';
import BlogView from './Views/BlogView';
import BlogDisplay from './Components/Blog/BlogDisplay';
import GameView from './Views/GameView';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogView />} />
        <Route path="/blog/:blogid" element={<BlogDisplay />} />
        <Route path="/cheat_squad" element={<GameView/>} />
      </Routes>
    </>
  );
}

export default App;
