import React from "react";

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Contact Us</h1>
                    <p className="lead text-center">Fill the contact form</p>
                </div>
                <div className="col-md-8 m-auto">
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Name"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control form-control-lg"
                                placeholder="Email Address"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Subject"
                                name="subject"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control form-control-lg"
                                placeholder="Message"
                                name="message"
                            ></textarea>
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

export default Contact;
