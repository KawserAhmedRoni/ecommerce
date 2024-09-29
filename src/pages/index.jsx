import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../components/Banner";
import Product from "./../components/Product";
import TwoBanner from "./../components/TwoBanner";

const Home = () => {
	return (
		<>
			<main>
				<section className="banner-area">
					<div className="container">
						<Swiper
							className="banner__slider"
							modules={[Pagination, Autoplay]}
							pagination={{
								clickable: true,
							}}
							loop={true}
							autoplay={{
								delay: 3500,
								disableOnInteraction: false,
							}}
							speed={1500}
						>
							<SwiperSlide>
								<Banner />
							</SwiperSlide>
							<SwiperSlide>
								<Banner />
							</SwiperSlide>
							<SwiperSlide>
								<Banner />
							</SwiperSlide>
						</Swiper>
					</div>
				</section>

				<section className="feature-area">
					<div className="container">
						<div className="row">
							<div className="col-lg-3">
								<div className="feature__item">
									<img
										src="/src/assets/images/icons/feature-icon1.png"
										alt="feature-icon"
									/>
									<h5>Premium Quality</h5>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="feature__item">
									<img
										src="/src/assets/images/icons/feature-icon2.png"
										alt="feature-icon"
									/>
									<h5>Easy Return</h5>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="feature__item">
									<img
										src="/src/assets/images/icons/feature-icon3.png"
										alt="feature-icon"
									/>
									<h5>Nationwide Delivery</h5>
								</div>
							</div>
							<div className="col-lg-3">
								<div className="feature__item">
									<img
										src="/src/assets/images/icons/feature-icon4.png"
										alt="feature-icon"
									/>
									<h5>Safe Payment</h5>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="category-area pt-50 pb-50">
					<div className="container">
						<div className="section-header text-center mb-40">
							<h2>Shop by Catagory</h2>
						</div>
						<div className="row">
							<div className="col-lg-2">
								<div className="category__item">
									<div className="image">
										<img
											src="/src/assets/images/category/category-image1.png"
											alt="image"
										/>
									</div>
									<h5>
										<a href="#0">T-Shirt</a>
									</h5>
									<span>20 Products</span>
								</div>
							</div>
							<div className="col-lg-2">
								<div className="category__item">
									<div className="image">
										<img
											src="/src/assets/images/category/category-image2.png"
											alt="image"
										/>
									</div>
									<h5>
										<a href="#0">T-Shirt</a>
									</h5>
									<span>20 Products</span>
								</div>
							</div>
							<div className="col-lg-2">
								<div className="category__item">
									<div className="image">
										<img
											src="/src/assets/images/category/category-image3.png"
											alt="image"
										/>
									</div>
									<h5>
										<a href="#0">T-Shirt</a>
									</h5>
									<span>20 Products</span>
								</div>
							</div>
							<div className="col-lg-2">
								<div className="category__item">
									<div className="image">
										<img
											src="/src/assets/images/category/category-image4.png"
											alt="image"
										/>
									</div>
									<h5>
										<a href="#0">T-Shirt</a>
									</h5>
									<span>20 Products</span>
								</div>
							</div>
							<div className="col-lg-2">
								<div className="category__item">
									<div className="image">
										<img
											src="/src/assets/images/category/category-image5.png"
											alt="image"
										/>
									</div>
									<h5>
										<a href="#0">T-Shirt</a>
									</h5>
									<span>20 Products</span>
								</div>
							</div>
							<div className="col-lg-2">
								<div className="category__item">
									<div className="image">
										<img
											src="/src/assets/images/category/category-image6.png"
											alt="image"
										/>
									</div>
									<h5>
										<a href="#0">T-Shirt</a>
									</h5>
									<span>20 Products</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="new-arrivals-area pb-50">
					<div className="container">
						<div className="section-header text-center d-flex flex-wrap gap-2 align-items-center justify-content-between mb-40">
							<h2>New Arrivals</h2>
							<a href="#0" className="btn-one">
								View All
							</a>
						</div>

						<Swiper
							className="new-arrivals__slider"
							slidesPerView={2}
							spaceBetween={24}
							breakpoints={{
								640: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
						>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
						</Swiper>
					</div>
				</section>

				<section className="selling-area pb-50">
					<div className="container">
						<div className="section-header text-center d-flex flex-wrap gap-2 align-items-center justify-content-between mb-40">
							<h2>Best Seller</h2>
							<a href="#0" className="btn-one">
								View All
							</a>
						</div>

						<Swiper
							className="selling__slider"
							slidesPerView={2}
							spaceBetween={24}
							breakpoints={{
								640: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
						>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
						</Swiper>
					</div>
				</section>

				<section className="twoAddBanner-area">
					<div className="container">
						<div className="row g-4">
							<div className="col-lg-6">
								<TwoBanner />
							</div>
							<div className="col-lg-6">
								<TwoBanner />
							</div>
						</div>
					</div>
				</section>

				<section className="tShirt-area pt-50 pb-50">
					<div className="container">
						<div className="section-header text-center d-flex flex-wrap gap-2 align-items-center justify-content-between mb-40">
							<h2>T-Shirts</h2>
							<a href="#0" className="btn-one">
								View All
							</a>
						</div>

						<Swiper
							className="tShirt__slider"
							slidesPerView={2}
							spaceBetween={24}
							breakpoints={{
								640: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
						>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
						</Swiper>
					</div>
				</section>

				<section className="pants-area pb-50">
					<div className="container">
						<div className="section-header text-center d-flex flex-wrap gap-2 align-items-center justify-content-between mb-40">
							<h2>Pants</h2>
							<a href="#0" className="btn-one">
								View All
							</a>
						</div>

						<Swiper
							className="pants__slider"
							slidesPerView={2}
							spaceBetween={24}
							breakpoints={{
								640: {
									slidesPerView: 2,
								},
								768: {
									slidesPerView: 3,
								},
								1024: {
									slidesPerView: 4,
								},
							}}
						>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
							<SwiperSlide>
								<Product />
							</SwiperSlide>
						</Swiper>
					</div>
				</section>

				<section className="subscribe-area mb-50">
					<div className="container">
						<div
							className="subscribe__bg"
							style={{
								backgroundImage: `url("/src/assets/images/bg/subcibe.jpg")`,
							}}
						>
							<div className="subscribe__content">
								<h2 className="mb-10">Subcsricbe Our Newsletter</h2>
								<p className="mb-20">
									Get notification about coupons, product <br />{" "}
									updates and good tips.
								</p>
								<div className="subscribe__input">
									<input type="text" placeholder="Enter your mail" />
									<button className="btn-two">Subscribe</button>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
