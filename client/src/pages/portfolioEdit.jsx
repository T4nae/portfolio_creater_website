import React, { useState, useEffect, useCallback } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./portfolioEdit.css";

function PortfolioEdit(props) {
    const [portfolio, setPortfolio] = useState([]);
    const { username } = useParams();

    const cssToReactCss = (css) =>
        css
            .split(";")
            .map((item) => item.split(":").map((item) => item.trim()))
            .reduce((acc, item) => {
                item[0] = item[0].replace(/-([a-z])/g, (g) =>
                    g[1].toUpperCase()
                );
                acc[item[0]] = item[1];
                return acc;
            }, {});

    const getPortfolio = useCallback(() => {
        try {
            fetch(props.proxy + "/portfolio/" + username, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (!data.message) {
                        setPortfolio(data);
                    } else if (data.message === "Portfolio not found") {
                        setPortfolio([]);
                    }
                })
                .catch((err) => console.log(err));
        } catch (error) {
            console.log(error);
        }
    }, [props, username]);

    const addSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value || "";
        const content = e.target.content.value || "";
        const type = e.target.type.value || "text";
        const css = cssToReactCss(e.target.css.value);
        const style = {
            class: e.target.class.value || "",
            css: css || {},
        };
        const data = { title, content, type, style };
        if (title || content) {
            try {
                fetch(props.proxy + "/portfolio/auth/create/" + username, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization:
                            "Bearer " + localStorage.getItem("token"),
                    },
                    body: JSON.stringify(data),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.message === "Portfolio created") {
                            getPortfolio();
                        }
                    })
                    .catch((err) => console.log(err));
            } catch (error) {
                console.log(error);
            }
        }
    };

    const editRequest = (e) => {
        e.preventDefault();
        const title = e.target.title.value || "";
        const content = e.target.content.value || "";
        const submitEvent = e.nativeEvent.submitter.value;
        const type =
            submitEvent === "delete"
                ? "delete"
                : submitEvent === "edit"
                ? e.target.type.value
                : "text";
        const css = cssToReactCss(e.target.css.value);
        const style = {
            class: e.target.class.value || "",
            css: css || {},
        };
        const data = { title, content, type, style, id: e.target.id.value };
        try {
            fetch(props.proxy + "/portfolio/auth/edit/" + username, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
                body: JSON.stringify(data),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.message === "Portfolio edited") {
                        getPortfolio();
                    }
                })
                .catch((err) => console.log(err));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPortfolio();
    }, [getPortfolio]);

    return (
        <div className="main">
            <div className="content">
                {portfolio.map((element, index) =>
                    element.type === "text" &&
                    element.title &&
                    element.content ? (
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
                        <div style={element.style.css} key={index}>
                            <img
                                className={element.style.class}
                                style={element.style.css}
                                src={element.content}
                                alt={element.title}
                            />
                        </div>
                    ) : element.type === "video" ? (
                        <div key={index}>
                            <video
                                className={element.style.class}
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
            <nav className="sidebar">
                <h1 className="sidebar-title">Edit Properties</h1>
                <div className="sidebar-content-add container mb-3">
                    <button
                        className="btn btn-lg btn-success dropdown-toggle w-100"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseAdd"
                        aria-expanded="false"
                        aria-controls="collapseAdd"
                    >
                        ADD
                    </button>
                    <div className="collapse" id="collapseAdd">
                        <div className="card card-body w-100 mt-3">
                            <form className="m-3" onSubmit={addSubmit}>
                                <div className="sidebar-content-options form-group mb-3">
                                    <label
                                        className="sidebar-content-options-label form-label"
                                        htmlFor="inputGroupSelect01"
                                    >
                                        Options
                                    </label>
                                    <select
                                        className="form-select"
                                        name="type"
                                        id="inputGroupSelect01"
                                    >
                                        <option value="text">Text</option>
                                        <option value="image">Image</option>
                                        <option value="audio">Audio</option>
                                        <option value="video">Video</option>
                                    </select>
                                </div>
                                <div className="sidebar-content-add-input">
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Title"
                                        className="form-control mb-3"
                                    />
                                    <input
                                        type="text"
                                        name="content"
                                        placeholder="Content"
                                        className="form-control mb-3"
                                    />
                                    <input
                                        type="text"
                                        name="css"
                                        placeholder="CSS"
                                        className="form-control mb-3"
                                    />
                                    <input
                                        type="text"
                                        name="class"
                                        placeholder="Bootstrap Class"
                                        className="form-control mb-3"
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="sidebar-content-edit container mb-3">
                    <div className="accordion" id="sidebar">
                        {portfolio.map((element, index) => (
                            <div className="accordion-item" key={index}>
                                <h5
                                    className="accordion-header"
                                    id={`heading${index + 1}`}
                                >
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index + 1}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse${index + 1}`}
                                    >
                                        {index + 1}. {element.type} -{" "}
                                        {element.title
                                            ? element.title
                                            : element.content}
                                    </button>
                                </h5>
                                <div
                                    id={`collapse${index + 1}`}
                                    className="accordion-collapse collapse w-100"
                                    aria-labelledby={`heading${index + 1}`}
                                    data-parent="#sidebar"
                                >
                                    <div className="accordion-body">
                                        <form
                                            className="px-4 py-3"
                                            onSubmit={editRequest}
                                        >
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    name="title"
                                                    placeholder="Title"
                                                    className="form-control mb-3"
                                                    defaultValue={element.title}
                                                />
                                                <input
                                                    type="text"
                                                    name="content"
                                                    placeholder="Content"
                                                    className="form-control mb-3"
                                                    defaultValue={
                                                        element.content
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    name="css"
                                                    placeholder="CSS"
                                                    className="form-control mb-3"
                                                    defaultValue={
                                                        element.style.css
                                                            ? Object.entries(
                                                                  element.style
                                                                      .css
                                                              )
                                                                  .map(
                                                                      ([
                                                                          key,
                                                                          value,
                                                                      ]) =>
                                                                          `${key.replace(
                                                                              /([A-Z])/g,
                                                                              (
                                                                                  g
                                                                              ) =>
                                                                                  `-${g[0].toLowerCase()}`
                                                                          )}: ${value};`
                                                                  )
                                                                  .join(" ")
                                                            : ""
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    name="class"
                                                    placeholder="Bootstrap Class"
                                                    className="form-control mb-3"
                                                    defaultValue={
                                                        element.style.class
                                                    }
                                                />
                                                <input
                                                    type="text"
                                                    name="id"
                                                    placeholder="ID"
                                                    className="form-control mb-3"
                                                    defaultValue={element._id}
                                                    hidden
                                                />
                                                <input
                                                    type="text"
                                                    name="type"
                                                    placeholder="Type"
                                                    className="form-control mb-3"
                                                    defaultValue={element.type}
                                                    hidden
                                                />
                                                <div className="btn-group w-100">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        name="action"
                                                        value="edit"
                                                    >
                                                        edit
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                        name="action"
                                                        value="delete"
                                                    >
                                                        delete
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <NavLink
                            to={"/portfolio/" + localStorage.getItem("user")}
                        >
                            <button
                                className="btn btn-lg btn-success w-100 mt-3"
                                type="button"
                            >
                                Back
                            </button>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default PortfolioEdit;
