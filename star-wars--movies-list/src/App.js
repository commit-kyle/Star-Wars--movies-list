import { Fragment, useState } from 'react';

import './App.css';

import MovieList from './components/Movies/MovieList/MovieList';

function App() {
	const [movies, setMovies] = useState([]);

	const baseURL = 'https://swapi.dev/api/films/';

	const fetchMoviesHandler = async () => {

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
	};

	return (
		<Fragment>
			<section>
				<button onClick={fetchMoviesHandler}>Fetch Movies</button>
			</section>
			<section><MovieList movies={movies}/>
			</section>
		</Fragment>
	);
}

export default App;
