import Product from "./../components/Product";
const Shop = () => {
	return (
		<main>
			<section className="shop-area pt-120 pb-120">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-3">
							<div className="shop__left">
								<h4 className="title">Filter</h4>
								<div className="shop__left-item mb-4">
									<h4>Catagory</h4>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Premium Plain T-Shirts
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Premium Plain T-Shirts
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Premium Plain T-Shirts
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Premium Plain T-Shirts
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Premium Plain T-Shirts
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Premium Plain T-Shirts
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Premium Plain T-Shirts
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Premium Plain T-Shirts
										</label>
									</div>
								</div>
								<div className="shop__left-item mb-4">
									<h4>Color</h4>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Red 500
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Green 100
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Yellow 300
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Pink 900
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">
											Green 500
										</label>
									</div>
								</div>
								<div className="shop__left-item">
									<h4>Size</h4>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">M</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">L</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">XL</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="checkbox"
										/>
										<label className="form-check-label">XXL</label>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-9">
							<div className="shop__right">
								<h4 className="title">
									Showing <span>80</span> results on view{" "}
									<span>12</span> results
								</h4>
								<div className="row g-4">
									<div className="col-md-4">
										<Product />
									</div>
									<div className="col-md-4">
										<Product />
									</div>
									<div className="col-md-4">
										<Product />
									</div>
									<div className="col-md-4">
										<Product />
									</div>
									<div className="col-md-4">
										<Product />
									</div>
									<div className="col-md-4">
										<Product />
									</div>
									<div className="col-md-4">
										<Product />
									</div>
									<div className="col-md-4">
										<Product />
									</div>
									<div className="col-md-4">
										<Product />
									</div>
								</div>
								<div className="btn-pegi center mt-60">
									<a href="#0">01</a>
									<a href="#0" className="active">
										02
									</a>
									<a href="#0">..</a>
									<a href="#0">14</a>
									<a href="#0">15</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Shop;
