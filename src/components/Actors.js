import React from "react";
import { actors } from "../data";

function Actors() {

  const actorList = actors.map(actor => {
    return (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <p>Movies:</p>
        <ul>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })

  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      <div>
        {actorList}
      </div>
    </div>
  );
}

export default Actors;
