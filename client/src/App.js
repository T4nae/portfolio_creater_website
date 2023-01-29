import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import Nav from "./components/nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Portfolio from "./pages/Portfolio";
import PortfolioEdit from "./pages/portfolioEdit";
import NotFound from "./pages/NotFound";

function App(props) {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Nav proxy={props.proxy} />
                            <Home />
                        </div>
                    }
                />
                <Route
                    path="about"
                    element={
                        <div>
                            <Nav proxy={props.proxy} />
                            <About />
                        </div>
                    }
                />
                <Route
                    path="contact"
                    element={
                        <>
                            <Nav proxy={props.proxy} />
                            <Contact />
                        </>
                    }
                />
                <Route
                    path="login"
                    element={
                        <>
                            <Nav proxy={props.proxy} />
                            <Login proxy={props.proxy} />
                        </>
                    }
                />
                <Route
                    path="register"
                    element={
                        <>
                            <Nav proxy={props.proxy} />
                            <Register proxy={props.proxy} />
                        </>
                    }
                />
                <Route
                    path="portfolio/:username"
                    element={<Portfolio proxy={props.proxy} />}
                />
                <Route
                    path="portfolio/:username/edit"
                    element={<PortfolioEdit proxy={props.proxy} />}
                />
                <Route
                    path="*"
                    element={
                        <>
                            <Nav proxy={props.proxy} />
                            <NotFound />
                        </>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
