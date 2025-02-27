import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import App from "./App.jsx";
import "./assets/css/style.css";
createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
