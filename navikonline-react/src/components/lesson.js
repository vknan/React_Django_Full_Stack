import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./lesson.css";

const LessonComponent = ({ courseId }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [lessons, setLessons] = useState([]);
  const [modules, setModules] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const fetchCourseAndLessons = async () => {
      try {
        const courseResponse = await axios.get(
          `https://vknan.pythonanywhere.com/api/courses/${courseId}`
        );
        setCourseTitle(courseResponse.data.title);

        const lessonsResponse = await axios.get(
          `https://vknan.pythonanywhere.com/api/lessons/?course_id=${courseId}`
        );
        setLessons(lessonsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCourseAndLessons();
  }, [courseId]);

  useEffect(() => {
    const fetchModulesForLesson = async () => {
      try {
        if (selectedLesson) {
          const modulesResponse = await axios.get(
            `https://vknan.pythonanywhere.com/api/modules/?lesson_id=${selectedLesson.id}`
          );
          setModules(modulesResponse.data);
        }
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    fetchModulesForLesson();
  }, [selectedLesson]);

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleModuleClick = (moduleId) => {
    // Navigate to a new route for displaying submodules of the selected module
    history.push(`/modules/${moduleId}`);
  };

  return (
    <div className="lesson-container">
      <h2 className="lesson-title">{courseTitle}</h2>
      <div className="lessons-grid">
        {lessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className={`lesson-card ${
              selectedLesson && selectedLesson.id === lesson.id
                ? "selected"
                : ""
            }`}
            style={{ backgroundColor: `hsl(${(index * 30) % 360}, 70%, 80%)` }}
            onClick={() => handleLessonSelect(lesson)}
          >
            <h3>{lesson.title}</h3>
          </div>
        ))}
      </div>
      <ul className="module-list">
        {modules.map((module) => (
          <li
            key={module.id}
            className="module-item"
            onClick={() => handleModuleClick(module.id)}
            style={{ backgroundColor: `hsl(${module.id % 360}, 70%, 80%)` }}
          >
            <Link to={`/modules/${module.id}`}>{module.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonComponent;
