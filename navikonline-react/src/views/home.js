import React from "react";

import { Helmet } from "react-helmet";

import Email from "../components/email";
import Header from "../components/header";
import Landing from "../components/landing";
import Courses from "../components/courses";
import CourseList from "../components/courselist";
import About from "../components/about";
import Stats from "../components/stats";
import OurApproach from "../components/our-approach";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import "./home.css";

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Navikonline</title>
        <meta property="og:title" content="Navikonline" />
      </Helmet>
      <Email></Email>
      <Header imageSrc1="/design-1500h.webp"></Header>
      <Landing></Landing>
      <CourseList></CourseList>
      <About></About>
      <Stats></Stats>
      <OurApproach></OurApproach>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
