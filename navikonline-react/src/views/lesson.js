import React from "react";
import LessonComponent from "../components/lesson";

const LessonsPage = ({ match }) => {
  // Extract the courseId from the URL params using destructuring
  const { courseId } = match.params;

  return (
    <div>
      {/* Render the Lesson component with the courseId */}

      <LessonComponent courseId={courseId} />
    </div>
  );
};

export default LessonsPage;
