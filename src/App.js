import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, addMovies] = useState([]);

  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films/').then(response => {
      return response.json();
    }).then(data => {
      const transformedMovies = data.results.map(movieData => {
        return {
          title: movieData.title,
          id: movieData.episode_id,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      });
      addMovies(transformedMovies);
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
