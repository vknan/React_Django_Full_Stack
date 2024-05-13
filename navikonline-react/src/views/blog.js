import React from "react";
import { Helmet } from "react-helmet";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Email from "../components/email";
import Header from "../components/header";
import Breadcrumbs from "../components/breadcrumbs";
import Blogcard from "../components/blogcard";
import Sidebar from "../components/sidebar";
import Pagination from "../components/pagination";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import SinglePost from "../components/singlepost"; // Import SinglePost component

import "./blog.css";

const Blog = (props) => {
  let { path } = useRouteMatch();

  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog</title>
        <meta property="og:title" content="Navikonline" />
      </Helmet>
      <Email />
      <Header imageSrc1="/design-1500h.webp" />
      <Breadcrumbs />
      <div className="blog-page">
        {/* Use Switch and Route for conditional rendering */}
        <Switch className="blog-switch">
          {/* Route for displaying a single post */}
          <Route path={`${path}/:postId`}>
            <SinglePost />
          </Route>

          {/* Default route for displaying all posts */}
          <Route exact path={path}>
            <Blogcard />

            {/* <Pagination className="pagination-container" /> */}
          </Route>
        </Switch>
        <Sidebar className="sidebar" />
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Blog;
