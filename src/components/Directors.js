import React from "react";
import { directors } from "../data";

function Directors() {

  const directorList = directors.map(director => {
    return (
      <div key={director.name}>
        <h2>Name: {director.name}</h2>
        <p>Movies:</p>
        <ul>
          {director.movies.map(movie => {
            return <li key={movie}>{movie}</li>
          })}
        </ul>
      </div>
    )
  })

  return (
  <div>
    {/*{code here}*/}
    <h1>Directors Page</h1>
    <div>
      {directorList}
    </div>
  </div>
  );
}

export default Directors;
