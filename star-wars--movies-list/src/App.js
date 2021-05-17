import { Fragment } from 'react';

import './App.css';

import MovieList from './components/Movies/MovieList/MovieList';

function App() {
	return (
		<Fragment>
			<section>
				<button>Fetch Movies</button>
			</section>
			<section>
				<MovieList movies={[]} />
			</section>
		</Fragment>
	);
}

export default App;
