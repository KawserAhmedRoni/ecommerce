import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<a href="#">
							Shop <i className="fa-solid fa-angle-down"></i>
						</a>
						<ul className="sub-menu">
							<li>
								<NavLink to="/shop">Mens Fashion</NavLink>
							</li>
							<li>
								<NavLink to="/shop">Wemens Fashion</NavLink>
							</li>
							<li>
								<NavLink to="/shop">Shirt</NavLink>
							</li>
							<li>
								<NavLink to="/shop">Pants</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to="/about">About Us</NavLink>
					</li>

					<li>
						<NavLink to="/blog">Blogs</NavLink>
					</li>

					<li>
						<li>
							<NavLink to="/contact">Contact</NavLink>
						</li>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Nav;
