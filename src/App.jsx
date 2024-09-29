import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "swiper/swiper-bundle.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderTwo from "./components/HeaderTwo";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/index";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import ShopDetails from "./pages/ShopDetails";

function AppContent() {
	const location = useLocation();
	const hidePath = ["*"];
	const headerTwo = ["/login"];

	return (
		<>
			{headerTwo.includes(location.pathname) ? <HeaderTwo /> : <Header />}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/shop-details" element={<ShopDetails />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/login" element={<Login />} />
				<Route path="*" element={<Error />} />
			</Routes>

			{!hidePath.includes(location.pathname) && <Footer />}
		</>
	);
}

function App() {
	return (
		<BrowserRouter>
			<AppContent />
		</BrowserRouter>
	);
}

export default App;
