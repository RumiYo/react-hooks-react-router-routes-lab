import React from "react";
import { movies } from "../data";

function Movies() {

  const movieList = movies.map(movie => {
    return ( 
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Time: {movie.time}</p>
        <p>Genres:</p>
        <ul>
          {movie.genres.map(genre => {
            return <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
      {/*{code here}*/}
      <h1>Movie Page</h1>
      <div>
          {movieList}
      </div>
    </div>
  );
}

export default Movies;
