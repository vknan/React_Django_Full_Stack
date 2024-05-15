import React from "react";

import { Helmet } from "react-helmet";

import Email from "../components/email";
import Header from "../components/header";
import Landing from "../components/landing";
// import Courses from "../components/courses";
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
        <meta
          name="description"
          content="Discover free online courses at Navikonline. Learn coding, design, and more!"
        />
        <meta
          name="keywords"
          content="free online courses, coding courses, design courses, Navikonline"
        />
        <title>Free Online Courses | Navikonline</title>
        <meta property="og:title" content="Navikonline" />
        <meta
          property="og:description"
          content="Discover free online courses at Navikonline. Learn coding, design, and more!"
        />
        <meta
          property="og:image"
          content="navikonline-react/public/design1.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
