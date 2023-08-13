
// b481f0f9
// http://www.omdbapi.com/?i=tt3896198&apikey=b481f0f9

import { useEffect } from "react";
import { useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import About from "./components/About";


function App() {
  
  const MOVIE_API = "b481f0f9";
  const MOVIE_API_URL = "http://www.omdbapi.com?i=tt3896198&apikey="+MOVIE_API;

  const searchMovie = async (movie_title) => {
    const response = await fetch(`${MOVIE_API_URL}&s=${movie_title}`);
    const data = await response.json();
    setallMovies(data.Search);
    console.log(data.Search);
  }

  useEffect(()=>{ 
    searchMovie('Avengers');
  },[])

  const [allMovies, setallMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // const movie1 = {
  //   "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  //   "Year": "2016",
  //   "imdbID": "tt18689424",
  //   "Type": "movie",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
  // }

  const changeSeach = (event) =>{
      const value = event.target.value;
      console.log(value);
      
  }

  return (
    <>  
      <Navbar/>
      <div className="app">
        {/* <About/> */}
        <h1>SushMovies</h1>

        <div className="search">
          <input className="searchedMovie"
            placeholder="Search for movies "
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
            
          />
          <img 
            onClick={()=>searchMovie(searchTerm)}
            src={SearchIcon} alt="ICON" 
          />
        </div>


        {
            allMovies?.length >0 ? ( 
              <div className="container">
                {
                  allMovies.map((movie) => <MovieCard movieDetails={movie}/>)
                }
                {/* <MovieCard movieDetails={allMovies[0]}/> */}
              </div>
             ) : (
              <div className="empty">
                <h2>No Movies Found! Check your spelling you satvi fail!</h2>
              </div>
             )
        }

        

      </div>


      
    </>
  )
}

export default App
