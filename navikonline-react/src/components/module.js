import React, { useState, useEffect } from "react";

import axios from "axios";

const ModulesComponent = ({ lessonId }) => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    // Function to fetch modules for the selected lesson
    const fetchModules = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/modules/${lessonId}`
        );
        setModules(response.data); // Assuming modules data is returned as an array
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };

    // Call the fetchModules function
    fetchModules();
  }, [lessonId]); // Fetch data whenever lessonId prop changes

  return (
    <div>
      <h3>Modules for Lesson {lessonId}</h3>
      <ul>
        {modules.map((module) => (
          <li key={module.id}>
            <strong>{module.title}</strong>
            {/* Display more module details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModulesComponent;
