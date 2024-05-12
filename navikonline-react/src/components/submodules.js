import React, { useState, useEffect } from "react";
import axios from "axios";
import "./submodules.css";

const SubmodulesComponent = ({ moduleId }) => {
  const [moduleInfo, setModuleInfo] = useState(null);
  const [submodules, setSubmodules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moduleResponse = await axios.get(
          `http://127.0.0.1:8000/api/modules/${moduleId}`
        );
        const fetchedModule = moduleResponse.data;
        setModuleInfo(fetchedModule);

        const submoduleResponse = await axios.get(
          `http://127.0.0.1:8000/api/submodules/?module_id=${moduleId}`
        );
        const fetchedSubmodules = submoduleResponse.data;
        setSubmodules(fetchedSubmodules);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [moduleId]);

  if (loading) {
    return <p>Loading submodules...</p>;
  }

  return (
    <div className="submodules-card">
      {moduleInfo && <h2 className="module-title">{moduleInfo.title}</h2>}
      <ul className="submodules-list">
        {submodules.map((submodule) => (
          <li key={submodule.id}>
            <strong className="submodule-title">{submodule.title}</strong> -{" "}
            <div
              className="submodule-description"
              dangerouslySetInnerHTML={{ __html: submodule.description }}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmodulesComponent;
