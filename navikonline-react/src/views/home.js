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
          content="machine intelligence training,
          a course,
          ict course,
          basic programming,
          course class,
          best courses,
          classes computer programming,
          best computer course,
          artificial intelligence computer science engineering,
          best computer classes near me,
          programming training,
          computer science aiml,
          be aiml,
          artificial intelligence comes under which course,
          computer courses,
          ml in data science,
          programming training courses,
          ai in computer engineering,
          computer engineering ai,
          the best machine learning course,
          it computer course,
          it training courses,
          deep learning artificial intelligence machine learning,
          artificial certificate,
          it classes,
          coding classes near me,
          programming classes near me,
          it courses near me,
          computer science artificial intelligence,
          computer science and artificial intelligence,
          be artificial intelligence,
          computer science engineering with artificial intelligence,
          ml course ai,
          computer science engineering with artificial intelligence and machine learning,
          machine learning and artificial intelligence engineering,
          computer coding classes,
          best machine learning programs,
          computer coding course,
          class ai,
          certification in machine learning and ai,
          qualification for artificial intelligence,
          computer science engineering artificial intelligence,
          computer science and artificial intelligence engineering,
          computer science artificial intelligence and machine learning,
          be ai and data science,
          it courses,
          computer science in artificial intelligence,
          computer science engineering in artificial intelligence,
          computer science engineering artificial intelligence and machine learning,
          machine learning classes near me,
          artificial intelligence in training and development,
          computer science for artificial intelligence,
          computer intelligence course,
          artificial intelligence what to study,
          learning to learn machine learning,
          computer science engineering ai ml,
          artificial engineering course,
          be artificial intelligence and data science,
          programming courses,
          computer programming courses,
          artificial intelligence in learning and development,
          ai data science machine learning,
          artificial intelligence & data science engineering,
          be artificial intelligence and machine learning,
          coding courses,
          computer science engineering artificial intelligence and data science,
          ai course in engineering,
          be computer science artificial intelligence,
          coding classes,
          best artificial intelligence course for beginners,
          artificial intelligence qualification,
          deep learning ai certificate,
          ai data training,
          artificial intelligence and data science engineering,
          data science machine learning ai,
          data science artificial intelligence machine learning,
          engineering in artificial intelligence and machine learning,
          be in artificial intelligence and machine learning,
          be in artificial intelligence and data science,
          computer coding training,
          top machine learning programs,
          aiml course in engineering,
          best it courses,
          computer science artificial intelligence course,
          learn coding for beginners,
          artificial intelligence course near me,
          artificial intelligence course qualification,
          be data science and artificial intelligence,
          artificial intelligence course in engineering,
          artificial training,
          university for artificial intelligence,
          coding courses for beginners,
          be artificial intelligence course,
          artificial intelligence machine learning and data science"
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
