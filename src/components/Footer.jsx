const Footer = () => {
	return (
		<>
			<footer className="footer-area">
				<div className="container">
					<div className="footer__wrp">
						<div className="footer__item footer-about">
							<h4 className="title">About Us</h4>
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing
								elit. Eos eveniet saepe nesciunt quae cumque magnam enim
								soluta laboriosam deserunt praesentium.
							</p>
							<div className="social-icons">
								<a href="#">
									<i className="fa-brands fa-facebook-f"></i>
								</a>
								<a href="#">
									<i className="fa-brands fa-x-twitter"></i>
								</a>
								<a href="#">
									<i className="fa-brands fa-linkedin-in"></i>
								</a>
								<a href="#">
									<i className="fa-brands fa-instagram"></i>
								</a>
							</div>
						</div>
						<div className="footer__item footer-link">
							<h4 className="title">Quick links</h4>
							<ul>
								<li>
									<a href="#0">About Us</a>
								</li>
								<li>
									<a href="#0">Our Stories</a>
								</li>
								<li>
									<a href="#0">Investor Corner</a>
								</li>
								<li>
									<a href="#0">Career</a>
								</li>
							</ul>
						</div>
						<div className="footer__item footer-link">
							<h4 className="title">Legal</h4>
							<ul>
								<li>
									<a href="#0">Term & Condition</a>
								</li>
								<li>
									<a href="#0">Privecy Policy</a>
								</li>
								<li>
									<a href="#0">Return Policy</a>
								</li>
								<li>
									<a href="#0">Help</a>
								</li>
								<li>
									<a href="#0">Security</a>
								</li>
							</ul>
						</div>
						<div className="footer__item footer-contact">
							<h4 className="title">Contact Us</h4>
							<ul>
								<li>
									<i className="ri-phone-fill"></i>{" "}
									<a href="#0">+85789475903</a>
								</li>
								<li>
									<i className="ri-mail-fill"></i>{" "}
									<a href="#0">oneummahbd@gmail.com</a>
								</li>
								<li>
									<i className="ri-map-pin-2-fill"></i>{" "}
									<a href="#0">Uttara, 0812- Dhaka</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="footer__copytext">
						<p>
							&copy; {new Date().getFullYear()} -{" "}
							<a href="#">One Ummah BD</a> All Rights Reserved
						</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
