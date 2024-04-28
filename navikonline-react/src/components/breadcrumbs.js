import React from "react";
import "./breadcrumbs.css";

const Breadcrumbs = () => {
  return (
    <section id="breadcrumbs" className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li>Blog</li>
        </ol>
        <h2>Blog</h2>
      </div>
    </section>
  );
};

export default Breadcrumbs;
