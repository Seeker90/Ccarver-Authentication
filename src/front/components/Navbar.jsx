import { Link } from "react-router-dom";
import LogoutButton from "./Logout";

export const Navbar = ({ dispatch }) => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<LogoutButton dispatch={dispatch} />
				</div>
			</div>
		</nav>
	);
};