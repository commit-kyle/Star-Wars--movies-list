import { useState } from 'react';

import classes from './App.css';

import Header from './components/Header/Header';
import Spinner from './components/UI/LoadingSpinner/Spinner';
import MovieList from './components/Movies/MovieList/MovieList';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const baseURL = 'https://swapi.dev/api/films/';

	const fetchMoviesHandler = async () => {
		setIsLoading(true);

		const response = await fetch(baseURL);
		const data = await response.json();

		const transformedMovies = data.results.map(movie => {
			return {
				id: movie.episode_id,
				title: movie.title,
				openingText: movie.opening_crawl,
				releaseDate: movie.release_date,
			};
		});

		setMovies(transformedMovies);
		setIsLoading(false);
	};

	return (
		<div className={classes.main}>
			<Header />
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			{!isLoading && movies.length > 0 && <MovieList movies={movies} />}
			{isLoading && <Spinner />}
		</div>
	);
}

export default App;
