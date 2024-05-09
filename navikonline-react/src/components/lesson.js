import React, { useState, useEffect } from "react";
import "./lesson.css";

const Lesson = ({ courseId }) => {
  const [lessons, setLessons] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [courseTitle, setCourseTitle] = useState("");

  useEffect(() => {
    const fetchLessons = async (courseId) => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/lessons/?course_id=${courseId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch lessons");
        }
        const data = await response.json();
        setLessons(data);
      } catch (error) {
        console.error("Error fetching lessons:", error);
      }
    };

    const fetchCourseTitle = async (courseId) => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/courses/${courseId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch course");
        }
        const data = await response.json();
        setCourseTitle(data.title); // Set the course title
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    if (courseId) {
      fetchLessons(courseId);
      fetchCourseTitle(courseId);
    }
  }, [courseId]);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setIsOpen(false); // Close the dropdown after selecting a lesson
  };

  return (
    <div className="lesson-container">
      <div className="dropdown">
        <button className="dropdown-toggle" onClick={handleDropdownToggle}>
          {selectedLesson
            ? selectedLesson.title
            : courseTitle || "Select a Lesson"}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {lessons.map((lesson) => (
              <div
                key={lesson.id}
                className="dropdown-item"
                onClick={() => handleLessonSelect(lesson)}
              >
                {lesson.title}
              </div>
            ))}
          </div>
        )}
      </div>
      {selectedLesson && (
        <div className="lesson-details">
          <h3>{selectedLesson.title}</h3>
          <p>{selectedLesson.description}</p>
        </div>
      )}
    </div>
  );
};

export default Lesson;
