import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./lesson.css";

const LessonComponent = ({ courseId }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Function to fetch lessons and course details for a specific course
    const fetchCourseAndLessons = async () => {
      try {
        // Fetch course details first
        // const moduleResponse = await axios.get(
        //   `http://127.0.0.1:8000/api/modules/${moduleId}`
        // );
        // setModules(moduleResponse.data.title);

        const courseResponse = await axios.get(
          `https://vknan.pythonanywhere.com/api/courses/${courseId}`
        );
        setCourseTitle(courseResponse.data.title); // Assuming course title is available in the response

        // Then fetch lessons for the course
        const lessonsResponse = await axios.get(
          `https://vknan.pythonanywhere.com/api/lessons/?course_id=${courseId}`
        );
        setLessons(lessonsResponse.data); // Assuming lessons data is returned as an array
      } catch (error) {
        console.error("Error fetching course and lessons:", error);
      }
    };

    // Call the fetchCourseAndLessons function
    fetchCourseAndLessons();
  }, [courseId]); // Fetch data whenever courseId prop changes

  return (
    <div className="lesson-container">
      <h2 className="lesson-title">{courseTitle}</h2>
      <ul className="lesson-list">
        {lessons.map((lesson) => (
          <li key={lesson.id} className="lesson-item">
            <Link to={`/modules/${lesson.id}`}>
              <strong>{lesson.title}</strong>
            </Link>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonComponent;
