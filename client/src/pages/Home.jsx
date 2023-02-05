import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const history = useNavigate();

    return (
        <div>
            <div
                id="carouselCaptions"
                className="carousel slide carousel-fade"
                data-bs-ride="false"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg
                            className="placeholder-img"
                            width="100%"
                            height="35rem"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <rect width="100%" height="100%" fill="#777" />
                            <text
                                x="50%"
                                y="50%"
                                fill="#555"
                                dy=".3em"
                                dx="-2.12em"
                                fontSize="5em"
                            >
                                First Slide
                            </text>
                        </svg>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Create your own Portfolio</h5>
                            <button
                                type="button"
                                className="btn btn-lg btn-primary mb-4"
                                onClick={() => history("/register")}
                            >
                                Sign up today
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg
                            className="placeholder-img"
                            width="100%"
                            height="35rem"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <rect width="100%" height="100%" fill="#777" />
                            <text
                                x="50%"
                                y="50%"
                                fill="#555"
                                dy=".3em"
                                dx="-2.12em"
                                fontSize="5em"
                            >
                                Second Slide
                            </text>
                        </svg>

                        <div className="carousel-caption d-none d-md-block">
                            <h5>Create your own Portfolio</h5>
                            <button
                                type="button"
                                className="btn btn-lg btn-primary mb-4"
                                onClick={() => history("/register")}
                            >
                                Sign up today
                            </button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg
                            className="placeholder-img"
                            width="100%"
                            height="35rem"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <rect width="100%" height="100%" fill="#777" />
                            <text
                                x="50%"
                                y="50%"
                                fill="#555"
                                dy=".3em"
                                dx="-2.12em"
                                fontSize="5em"
                            >
                                Third Slide
                            </text>
                        </svg>

                        <div className="carousel-caption d-none d-md-block">
                            <h5>Create your own Portfolio</h5>
                            <button
                                type="button"
                                className="btn btn-lg btn-primary mb-4"
                                onClick={() => history("/register")}
                            >
                                Sign up today
                            </button>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="card mb-4 mt-4 shadow-sm">
                        <div className="card-body">
                            <h1 className="card-title">s</h1>
                            <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 mt-4 shadow-sm">
                            <svg
                                className="placeholder-img card-img-top"
                                width="100%"
                                height="225"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#55595c"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    fill="#eceeef"
                                    dy=".3em"
                                    dx="-2.12em"
                                    fontSize="5em"
                                >
                                    1
                                </text>
                            </svg>
                            <div className="card-body">
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 mt-4 shadow-sm">
                            <svg
                                className="placeholder-img card-img-top"
                                width="100%"
                                height="225"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#55595c"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    fill="#eceeef"
                                    dy=".3em"
                                    dx="-2.12em"
                                    fontSize="5em"
                                >
                                    2
                                </text>
                            </svg>
                            <div className="card-body">
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 mt-4 shadow-sm">
                            <svg
                                className="placeholder-img card-img-top"
                                width="100%"
                                height="225"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#55595c"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    fill="#eceeef"
                                    dy=".3em"
                                    dx="-2.12em"
                                    fontSize="5em"
                                >
                                    3
                                </text>
                            </svg>
                            <div className="card-body">
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 mt-4 shadow-sm">
                            <svg
                                className="placeholder-img card-img-top"
                                width="100%"
                                height="225"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#55595c"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    fill="#eceeef"
                                    dy=".3em"
                                    dx="-2.12em"
                                    fontSize="5em"
                                >
                                    4
                                </text>
                            </svg>
                            <div className="card-body">
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 mt-4 shadow-sm">
                            <svg
                                className="placeholder-img card-img-top"
                                width="100%"
                                height="225"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#55595c"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    fill="#eceeef"
                                    dy=".3em"
                                    dx="-2.12em"
                                    fontSize="5em"
                                >
                                    5
                                </text>
                            </svg>
                            <div className="card-body">
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mb-4 mt-4 shadow-sm">
                            <svg
                                className="placeholder-img card-img-top"
                                width="100%"
                                height="225"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                preserveAspectRatio="xMidYMid slice"
                                focusable="false"
                            >
                                <rect
                                    width="100%"
                                    height="100%"
                                    fill="#55595c"
                                />
                                <text
                                    x="50%"
                                    y="50%"
                                    fill="#eceeef"
                                    dy=".3em"
                                    dx="-2.12em"
                                    fontSize="5em"
                                >
                                    6
                                </text>
                            </svg>
                            <div className="card-body">
                                <p className="card-text">
                                    This is a wider card with supporting text
                                    below as a natural lead-in to additional
                                    content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
