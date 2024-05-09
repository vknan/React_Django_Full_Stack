import React from "react";
import Lesson from "../components/lesson";

const LessonsPage = ({ match }) => {
  // Extract the courseId from the URL params using destructuring
  const { courseId } = match.params;

  return (
    <div>
      {/* Render the Lesson component with the courseId */}
      <Lesson courseId={courseId} />
    </div>
  );
};

export default LessonsPage;
