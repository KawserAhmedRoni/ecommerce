import { Link } from "react-router-dom";
const Error = () => {
	return (
		<main>
			<section className="error-area">
				<div className="container">
					<div className="error__content text-center mt-5 mb-5">
						<h1>404 Page Not Found</h1>
						<Link to="/" className="btn-one mt-4">
							Back Home
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Error;
