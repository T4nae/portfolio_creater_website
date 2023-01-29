import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

function Portfolio(props) {
    const [portfolio, setPortfolio] = useState([]);
    const { username } = useParams();

    const loggedInUser = localStorage.getItem("user");

    useEffect(() => {
        try {
            fetch(props.proxy + "/portfolio/" + username, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (!data.message) {
                        setPortfolio(data);
                    } else if (
                        data.message === "Portfolio not found" &&
                        loggedInUser !== username
                    ) {
                        setPortfolio([
                            {
                                type: "empty",
                            },
                        ]);
                    } else if (
                        data.message === "Portfolio not found" &&
                        loggedInUser === username
                    ) {
                        setPortfolio([
                            {
                                type: "login",
                            },
                        ]);
                    }
                })
                .catch((err) => console.log(err));
        } catch (error) {
            console.log(error);
        }
    }, [props, username, loggedInUser]);

    return (
        <div>
            {portfolio.map((element, index) =>
                element.type === "text" && element.title && element.content ? (
                    <div className={element.style.class} key={index}>
                        <h1 style={element.style.css}>{element.title}</h1>
                        <p style={element.style.css}>{element.content}</p>
                    </div>
                ) : element.type === "text" &&
                  element.title &&
                  !element.content ? (
                    <div className={element.style.class} key={index}>
                        <h1 style={element.style.css}>{element.title}</h1>
                    </div>
                ) : element.type === "text" &&
                  !element.title &&
                  element.content ? (
                    <div className={element.style.class} key={index}>
                        <p style={element.style.css}>{element.content}</p>
                    </div>
                ) : element.type === "image" ? (
                    <div className={element.style.class} key={index}>
                        <img src={element.content} alt={element.title} />
                    </div>
                ) : element.type === "video" ? (
                    <div className={element.style.class} key={index}>
                        <video
                            style={element.style.css}
                            src={element.content}
                            controls
                        ></video>
                    </div>
                ) : element.type === "audio" ? (
                    <div className={element.style.class} key={index}>
                        <audio
                            style={element.style.css}
                            src={element.content}
                            controls
                        ></audio>
                    </div>
                ) : element.type === "login" ? (
                    <div key={index}>
                        <h1>Portfolio empty</h1>
                        <h3>Customize your Portfolio Now</h3>
                        <NavLink to={"/portfolio/" + username + "/edit"}>
                            Create Portfolio
                        </NavLink>
                    </div>
                ) : (
                    <div key={index}>
                        <h1>Portfolio empty</h1>
                        <h3>Login to create your Portfolio</h3>
                        <NavLink to="/login">Login</NavLink>
                    </div>
                )
            )}
        </div>
    );
}

export default Portfolio;
