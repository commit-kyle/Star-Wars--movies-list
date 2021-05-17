import classes from './MovieList.module.css';

import Movie from '../Movie/Movie';

const MovieList = props => {
	return (
		<ul className={classes['movies-list']}>
			{props.movies.map(movie => (
				<Movie
					key={movie.id}
					title={movie.title}
					releaseDate={movie.release}
					openingText={movie.openingText}
				/>
			))}
		</ul>
	);
};

export default MovieList;
