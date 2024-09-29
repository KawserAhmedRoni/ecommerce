import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import MenuCart from "./shop/MenuCart";

const Header = () => {
	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<header className={`header-area ${isFixed ? `menu-fixed` : ``}`}>
				<div className="container">
					<div className="header__main">
						<Link to="/" className="logo">
							<img src="/src/assets/images/logo/logo.png" alt="logo" />
						</Link>
						<div className="main-menu">
							<Nav />
						</div>
						<div className="menu-info d-none d-lg-flex">
							<a href="#" className="shop__cart position-relative">
								<i className="ri-shopping-cart-2-fill"></i> $00.00
								<MenuCart />
							</a>
							<Link to="/login">
								<i className="ri-user-fill"></i> Login
							</Link>
						</div>
						<button
							className="menubars d-block d-lg-none"
							type="button"
							data-bs-toggle="offcanvas"
							data-bs-target="#menubar"
						>
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
