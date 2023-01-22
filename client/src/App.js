import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "./components/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Portfolio from "./pages/Portfolio"
import NotFound from "./pages/NotFound";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Nav />
                            <Home />
                        </div>
                    }
                />
                <Route
                    path="about"
                    element={
                        <div>
                            <Nav />
                            <About />
                        </div>
                    }
                />
                <Route
                    path="contact"
                    element={
                        <div>
                            <Nav />
                            <Contact />
                        </div>
                    }
                />
				<Route
					path="login"
					element={
						<Login />
					}
				/>
				<Route 
					path="register"
					element={
						<Register />
					}
				/>
				<Route 
					path="portfolio"
					element={
						<Portfolio />
					}
				/>
				<Route
					path="*"
					element={
						<NotFound />
					}
				/>
            </Routes>
        </div>
    );
}

export default App;
