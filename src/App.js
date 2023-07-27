import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import NavBar from './Components/Partials/NavBar';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen py-[5%] sm:py-[2%] px-[5%] md:px-[10%] flex flex-col gap-10 font-Inter'>
        <NavBar />
        <Routes>
          <Route path='/news-home-page' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
