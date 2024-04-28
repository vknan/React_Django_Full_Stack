import React from "react";

import { Helmet } from "react-helmet";

import Email from "../components/email";
import Header from "../components/header";
import Breadcrumbs from "../components/breadcrumbs";
// import Courses from "../components/courses";
import Blogcard from "../components/blogcard";
import Sidebar from "../components/sidebar";
import Pagination from "../components/pagination";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import "./blog.css";

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog</title>
        <meta property="og:title" content="Navikonline" />
      </Helmet>
      <Email />
      <Header imageSrc1="/design-1500h.webp" />
      <Breadcrumbs />
      <Blogcard />
      {/* <Sidebar className="sidebar-container" />
      <Pagination className="pagination-container" /> */}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
