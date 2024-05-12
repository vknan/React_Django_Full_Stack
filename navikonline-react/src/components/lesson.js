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

  const handleLessonChange = (e) => {
    const lessonId = e.target.value;
    const selected = lessons.find((lesson) => lesson.id === parseInt(lessonId));
    setSelectedLesson(selected || null); // Set selected lesson or null if not found
  };

  const handleModuleClick = (moduleId) => {
    // Navigate to a new route for displaying submodules of the selected module
    history.push(`/modules/${moduleId}`);
  };

  return (
    <div className="lesson-container">
      <h2 className="lesson-title">{courseTitle}</h2>
      <div>
        <select
          value={selectedLesson ? selectedLesson.id : ""}
          onChange={handleLessonChange}
        >
          <option value="">Select a Lesson</option>
          {lessons.map((lesson) => (
            <option key={lesson.id} value={lesson.id}>
              {lesson.title}
            </option>
          ))}
        </select>
      </div>
      <ul className="module-list">
        {modules.map((module) => (
          <li key={module.id} className="module-item">
            <Link
              to={`/modules/${module.id}`}
              onClick={() => handleModuleClick(module.id)}
            >
              {module.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonComponent;
