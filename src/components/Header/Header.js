import React from 'react'
import './Header.css';
const Header = () => {
const brand = "{Finsweet";
return (
<div>
	<nav className="navbar bg-body-tertiary">
		<div className="container-fluid">
			<div className="container d-flex justify-content-between align-items-center">
				<a class="navbar-brand fw-bold">{brand}</a>
			<div className="d-flex justify-content-center" role="search">
				<a className="nav-link" type="submit">About</a>
			</div>
			</div>
		</div>
	</nav>
</div>




)
}
export default Header