
// b481f0f9
// http://www.omdbapi.com/?i=tt3896198&apikey=b481f0f9

import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import About from "./components/About";
import * as dotenv from "dotenv"
import { Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";


function App() {

  return (
    <>  
      <Navbar/>
      
      <div className="app">
        {/* <About/> */}
        <h1 className="home_h1">SushMovies</h1>

        <Routes>
          <Route path="/" element={<Feed/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
        
      </div>

        
      
    </>
  )
}

export default App
