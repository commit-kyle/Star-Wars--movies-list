import classes from './MovieList.module.css';

import Movie from '../Movie/Movie';

const MovieList = props => {
	return (
		<section>
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
		</section>
	);
};

export default MovieList;
