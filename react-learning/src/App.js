import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './movie/components/MoviesList';
import './App.css';
import AddMovie from './movie/components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 const fetchMovies = useCallback(async () => {
    setIsLoading(true)
    setError(null);

   try {
      const response = await fetch("https://react-http-342f9-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        throw new Error("Something went wrong here.");
      }
      const data = await response.json()

      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });

    setMovies(transformedMovies);
   } catch (error) {
    setError(error.message);
   }
   setIsLoading(false)
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  async function addMovieHandler(movie) {
    const response = await fetch("https://react-http-342f9-default-rtdb.firebaseio.com/movies.json",{
    method: 'POST',
    body: JSON.stringify(movie),
    headers:{
      'Content-Type': 'application/json'
    }
    });
    const data= await response.json();
    console.log(data);
  }

  let content = <p>Found no movies</p>;

  if(movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if(error) {
    content = <p>error</p>
  }
  if(isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
