import React from "react";
import { useParams } from "react-router-dom";
import SubmodulesComponent from "../components/submodules";

const SubmodulesPage = () => {
  const { moduleId } = useParams();

  return (
    <div>
      <SubmodulesComponent moduleId={moduleId} />
    </div>
  );
};

export default SubmodulesPage;
