import React, { useState, useEffect } from "react";
import "./courselist.css"; // Import CSS file for card styling
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/courses/?format=json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch courses");
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div id="course">
      <h1 className="course-list-heading">Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <div className="course-card">
            <Player
              src={course.lottieicon}
              loop={true}
              speed="0.5"
              autoplay={true}
              background="transparent"
              className="courses-lottie-node"
            ></Player>
            <Link to={`/lessons/${course.id}`}>
              <p className="course-title">{course.title}</p>
              <p className="course-description">{course.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
