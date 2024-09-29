import { Link } from "react-router-dom";
const Product = () => {
	return (
		<>
			<div className="product__item">
				<Link to="/shop-details" className="product__image">
					<img src="/src/assets/images/product/product1-font.jpg" alt="" />
					<div className="product__icons">
						<a href="#0">
							<i className="ri-heart-3-line"></i>
						</a>
						<a href="#0">
							<i className="ri-eye-line"></i>
						</a>
						<a href="#0">
							<i className="ri-shopping-bag-line"></i>
						</a>
					</div>
				</Link>
				<div className="product__content">
					<h5>
						<Link to="/shop-details">Wide Linen-Blend Trousers</Link>
					</h5>
					<div className="price">
						<span>$100.00</span>
						<del>$150.00</del>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
