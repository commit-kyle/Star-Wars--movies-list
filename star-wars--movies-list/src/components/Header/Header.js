import { Fragment } from 'react';
import classes from './Header.module.css';

const Header = () => {
	return (
		<Fragment>
			<div className={classes.background}>
				<img
					src="https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80"
					alt="Galaxy filled with stars"
				/>
			</div>
			<div className={classes.header}>
				<a href="/" className={classes.logo} title="Star Wars Home">
					<img
						src="https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_horiz-04368052e188.png"
						alt="Star Wars Home"
					/>
				</a>
			</div>
		</Fragment>
	);
};

export default Header;
