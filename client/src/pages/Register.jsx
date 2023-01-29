import React from "react";
import { useNavigate } from "react-router-dom";

function Register(props) {
    const history = useNavigate();

    const handelSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        fetch("http://localhost:8080/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: name,
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "User created") {
                    localStorage.setItem("token", data.token);
                    localStorage.setItem(
                        "username",
                        JSON.stringify(data.username)
                    );
                    history("/login");
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
                    <h1 className="display-4 text-center">Register</h1>
                    <p className="lead text-center">Register for an account</p>
                </div>
                <div className="col-md-8 m-auto">
                    <form onSubmit={handelSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                aria-describedby="nameHelp"
                                placeholder="Enter name"
                            />
                            <small
                                id="nameHelp"
                                className="form-text text-muted"
                            >
                                We'll never share your name with anyone else.
                            </small>
                        </div>
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

export default Register;
