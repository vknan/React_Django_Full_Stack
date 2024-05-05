import React, { useState, useEffect } from "react";
import "./courselist.css"; // Import CSS file for card styling
import { Player } from "@lottiefiles/react-lottie-player";

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
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div id="course">
      <h1 className="course-list-heading">Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <Player
              src={course.lottieicon}
              loop={true}
              speed="0.5"
              autoplay={true}
              background="transparent"
              className="courses-lottie-node"
            ></Player>
            <p className="course-title">{course.title}</p>
            <p className="course-description">{course.description}</p>
            {/* <p className="course-instructor">
              Instructor: {course.instructor.username}
            </p> */}

            {/* Add more course details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
