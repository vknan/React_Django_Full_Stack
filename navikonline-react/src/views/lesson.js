import React from "react";
import LessonComponent from "../components/lesson";

const LessonsPage = ({ match }) => {
  // Extract the courseId and lessonId from the URL params using destructuring
  const { courseId, lessonId } = match.params;

  return (
    <div>
      {/* Render the LessonComponent with courseId and lessonId */}
      <LessonComponent courseId={courseId} lessonId={lessonId} />
    </div>
  );
};

export default LessonsPage;
