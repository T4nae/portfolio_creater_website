import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "./nav.css";

const Nav = (props) => {
    const history = useNavigate();
    let username;
    const logout = () => {
        try {
            fetch(props.proxy + "/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.message === "Logged out") {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        history("/");
                    }
                })
                .catch((err) => console.log(err));
        } catch (e) {
            console.log(e);
        }
    };

    const handelChange = (e) => {
        e.preventDefault();
        username = e.target.value;
    };

    const portfolio = (e) => {
        e.preventDefault();
        history("portfolio/" + username);
    };

    return (
        <nav className="navbar navbar-light bg-light">
            <div
                className="container-fluid"
                style={{ borderBottom: "3px solid rgb(0,0,0,0.05)" }}
            >
                <NavLink className="navbar-brand" to="/">
                    <img
                        src="/letterpress_Title.png"
                        alt="LetterPress Logo"
                        height="50px"
                        className="d-inline-block align-text-top"
                    />
                </NavLink>
                <div className="d-flex">
                    <ul className="nav nav-tabs justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </NavLink>
                        </li>
                        {localStorage.getItem("token") ? (
                            <>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        aria-current="page"
                                        href="/"
                                        onClick={logout}
                                    >
                                        Logout
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        aria-current="page"
                                        to={
                                            "/portfolio/" +
                                            localStorage.getItem("user") +
                                            "/edit"
                                        }
                                    >
                                        Portfolio
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/register"
                                    >
                                        Register
                                    </NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <form onSubmit={portfolio}>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">
                            @
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            onChange={handelChange}
                        />
                    </div>
                    <button type="submit" id="button-addon1" hidden />
                </form>
            </div>
        </nav>
    );
};

export default Nav;
