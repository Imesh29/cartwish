import React from "react";

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <section className="align_center form_page">
      <form className="authentication_form">
        <h2>LoginForm</h2>
        <div className="form_inputs">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="form_text_inputs"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <input
              type="number"
              id="phone"
              className="form_text_inputs"
              placeholder="Enter Your Name"
            />
          </div>
          <button type="submit" className="search_button form_submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
