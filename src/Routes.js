import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
function RouteConfig() {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig