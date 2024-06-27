import React, { useState, useEffect } from "react";
import "./courselist.css"; // Import CSS file for card styling
import { Player } from "@lottiefiles/react-lottie-player";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import AuthService from "../services/auth";

const CourseList = () => {
  const [uniqueCourses, setUniqueCourses] = useState([]);
  const [loadedCourses, setLoadedCourses] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState(new Set());
  const history = useHistory();

  useEffect(() => {
    fetchLessons();
    const user = AuthService.getCurrentUser();
    setCurrentUser(user);
    if (user) {
      fetchEnrolledCourses(user.id);
    }
  }, []);

  const fetchLessons = async () => {
    try {
      const response = await fetch(
        "https://vknan.pythonanywhere.com/api/lessons/?format=json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Lessons");
      }
      const data = await response.json();

      const uniqueCourseIds = new Set();
      const limitedCourses = [];

      data.forEach((lesson) => {
        const courseId = lesson.course.id;
        if (!uniqueCourseIds.has(courseId) && limitedCourses.length < 4) {
          uniqueCourseIds.add(courseId);
          limitedCourses.push({
            id: courseId,
            title: lesson.course.title,
            description: lesson.course.description,
            lottieicon: lesson.course.lottieicon,
          });
        }
      });

      setUniqueCourses(limitedCourses);
      setLoadedCourses(data);
    } catch (error) {
      console.error("Error fetching Lessons:", error);
    }
  };

  const fetchEnrolledCourses = async (userId) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      if (!tokens || !tokens.access) {
        throw new Error("No tokens found");
      }
      const response = await axios.get(
        `https://vknan.pythonanywhere.com/api/enrolled-courses/${userId}/`,
        {
          headers: {
            Authorization: `Bearer ${tokens.access}`,
          },
        }
      );
      const enrolledCoursesSet = new Set(response.data);
      setEnrolledCourses(enrolledCoursesSet);
    } catch (error) {
      console.error("Error fetching enrolled courses:", error);
    }
  };

  const handleEnroll = async (courseId) => {
    if (!currentUser) {
      history.push("/auth/login");
      return;
    }

    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const response = await axios.post(
        "https://vknan.pythonanywhere.com/api/enroll/",
        {
          user_id: currentUser.id,
          course_id: courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${tokens.access}`,
          },
        }
      );

      if (response.status === 200) {
        setEnrolledCourses(new Set([...enrolledCourses, courseId]));
        alert("Enrolled successfully!");
      }
    } catch (error) {
      console.error("Error enrolling in course:", error);
      alert("Failed to enroll in course.");
    }
  };

  const handleUnenroll = async (courseId) => {
    if (!currentUser) {
      history.push("/auth/login");
      return;
    }

    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const response = await axios.post(
        "https://vknan.pythonanywhere.com/api/unenroll/",
        {
          user_id: currentUser.id,
          course_id: courseId,
        },
        {
          headers: {
            Authorization: `Bearer ${tokens.access}`,
          },
        }
      );

      if (response.status === 200) {
        const updatedEnrolledCourses = new Set(enrolledCourses);
        updatedEnrolledCourses.delete(courseId);
        setEnrolledCourses(updatedEnrolledCourses);
        alert("Unenrolled successfully!");
      }
    } catch (error) {
      console.error("Error unenrolling from course:", error);
      alert("Failed to unenroll from course.");
    }
  };

  return (
    <div id="course">
      <h1 className="course-list-heading">Courses</h1>
      <div className="course-list">
        {uniqueCourses.map((course) => (
          <div key={course.id} className="course-card">
            <Player
              src={course.lottieicon}
              loop={true}
              speed="0.5"
              autoplay={true}
              background="transparent"
              className="courses-lottie-node"
            ></Player>
            <Link
              to={`/lessons/${course.id}/${
                loadedCourses.find((lesson) => lesson.course.id === course.id)
                  ?.id
              }`}
            >
              <p className="course-title">{course.title}</p>
              <p className="course-description">{course.description}</p>
            </Link>
            <button
              className="enroll-button"
              onClick={() =>
                enrolledCourses.has(course.id)
                  ? handleUnenroll(course.id)
                  : handleEnroll(course.id)
              }
            >
              {enrolledCourses.has(course.id) ? "Unenroll" : "Enroll Now"}
            </button>
            <div className="course-price">
              <a
                href="https://www.paypal.com/ncp/payment/LBK9QWU9C7P3Y"
                className="pay-now-button"
              >
                Pay Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
