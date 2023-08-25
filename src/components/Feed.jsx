import { useEffect } from "react";
import { useState } from "react";
import SearchIcon from '../search.svg';
import MovieCard from "../components/MovieCard";

import * as dotenv from "dotenv"
import { Route, Routes } from "react-router-dom";


const Feed = () => {

    const [loading, setloading] = useState(false)
  
    const MOVIE_API = import.meta.env.VITE_MOVIE_API;
    const MOVIE_API_URL = "https://www.omdbapi.com?i=tt3896198&apikey="+MOVIE_API;

    const searchMovie = async (movie_title) => {
        setloading(true)
        let response={}
        setTimeout(async() => {
        response = await fetch(`${MOVIE_API_URL}&s=${movie_title}`);
        const data = await response.json();
        setallMovies(data.Search);
        setloading(false)
        console.log("received")
        console.log(data.Search)
        }, 500)
        
    }

    useEffect(()=>{ 
        setSearchTerm('Avengers');
        searchMovie('Avengers');
    },[])

    const [allMovies, setallMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(null);

    const changeSeach = (event) =>{
        const value = event.target.value; 
    }
    
    const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchTerm(e.target.value)
    setSearchTimeout(
        setTimeout(() => {
        fetchNewPost(e.target.value);
        }, 500)
    );
    }

    const fetchNewPost = (term) => {
        searchMovie(term)
    }

  return (
    <>
        <div className="search">
          <input className="searchedMovie"
            placeholder={process.env.MOVIE_API}
            value={searchTerm}
            onChange={(e)=> handleSearchChange(e)}
            
          />
          <img 
            onClick={()=>searchMovie(searchTerm)}
            src={SearchIcon} alt="ICON" 
          />
        </div>


        {loading?(<div className="pyramid-loader">
          <div className="wrapper">
            <span className="side side1"></span>
            <span className="side side2"></span>
            <span className="side side3"></span>
            <span className="side side4"></span>
            <span className="shadow"></span>
          </div>  
        </div>):(allMovies?.length >0 ? ( 
                      <div className="container">
                {
                  allMovies.map((movie) => <MovieCard movieDetails={movie}/>)
                }
                {/* <MovieCard movieDetails={allMovies[0]}/> */}
              </div>
             ) : (
              <div className="empty">
                <h2>No Movies Found! Check your spelling!</h2>
              </div>
             ))
        }

    </>
  )
}

export default Feed