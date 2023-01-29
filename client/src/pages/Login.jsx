import React from "react";
import { useNavigate } from "react-router-dom";

function Login(props) {
    const history = useNavigate();

    const handelSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        fetch(props.proxy + "/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.message) {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", data.username);
                    history("/");
                } else {
                    console.log(data.message);
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Login</h1>
                    <p className="lead text-center">Log in to your account</p>
                </div>
                <div className="col-md-8 m-auto">
                    <form onSubmit={handelSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                            <small
                                id="emailHelp"
                                className="form-text text-muted"
                            >
                                We'll never share your email with anyone else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btn btn-primary btn-block mt-4 w-100"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
