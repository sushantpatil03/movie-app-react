import React from 'react'

const MovieCard = ({movieDetails}) => {
    
  return (
    <div className="movie">
        <div>
            <p>{movieDetails.Year}</p>
        </div>
        <div>
            <img src={movieDetails.Poster} alt="OOPS" />
        </div>
        <div>
            <span>{movieDetails.Type}</span>
            <h3>{movieDetails.Title}</h3>
        </div>
    </div>
  )
}

export default MovieCard