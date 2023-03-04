import React from 'react'
import './Header.css';
import { Link} from 'react-router-dom';
const Header = () => {
const brand = "{Finsweet";
return (
<div>
	<nav className="navbar bg-body-tertiary">
		<div className="container-fluid">
			<div className="container d-flex justify-content-between align-items-center">
				<Link class="navbar-brand brand-name fw-bold" aria-current="page" to='/'>{brand}</Link>
			<div className="navigation-link d-flex justify-content-center" role="search">
				<Link className="nav-link fw-bold" aria-current="page" to="/about">About</Link>
			</div>
			</div>
		</div>
	</nav>
</div>




)
}
export default Header