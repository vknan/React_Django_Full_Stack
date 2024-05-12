import React, { useState, useEffect } from "react";
import "./courselist.css"; // Import CSS file for card styling
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const CourseList = () => {
  const [uniqueCourses, setUniqueCourses] = useState([]);
  const [loadedCourses, setLoadedCourses] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await fetch(
          "https://vknan.pythonanywhere.com/api/lessons/?format=json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Lessons");
        }
        const data = await response.json();

        const uniqueCourseIds = new Set();
        const limitedCourses = [];

        // Loop through lessons data to collect unique course titles and limit to 4 unique courses
        data.forEach((lesson) => {
          const courseId = lesson.course.id;
          if (!uniqueCourseIds.has(courseId) && limitedCourses.length < 4) {
            uniqueCourseIds.add(courseId);
            limitedCourses.push({
              id: courseId,
              title: lesson.course.title,
              description: lesson.course.description,
              lottieicon: lesson.course.lottieicon,
            });
          }
        });

        setUniqueCourses(limitedCourses);
        setLoadedCourses(data);
      } catch (error) {
        console.error("Error fetching Lessons:", error);
      }
    };

    fetchLessons();
  }, []);

  return (
    <div id="course">
      <h1 className="course-list-heading">Courses</h1>
      <div className="course-list">
        {uniqueCourses.map((course) => (
          <div key={course.id} className="course-card">
            <Player
              src={course.lottieicon}
              loop={true}
              speed="0.5"
              autoplay={true}
              background="transparent"
              className="courses-lottie-node"
            ></Player>
            <Link
              to={`/lessons/${course.id}/${
                loadedCourses.find((lesson) => lesson.course.id === course.id)
                  ?.id
              }`}
            >
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
