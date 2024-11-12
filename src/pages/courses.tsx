// courses.tsx
import React, { useEffect, useState } from "react";
import { fetchCourses } from "../api";
import Topbar from "../sections/topbar";
import Sidebars from "../sections/sidebar";
import "../Styles/courses.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface Course {
  id: string;
  name: string; 
  air_date: string;
  status: "In Progress" | "Completed";
}

const Courses: React.FC = () => {
  const [courses, setcourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadcourses = async () => {
      try {
        const data = await fetchCourses();
        setcourses(
          data.map((course: any) => ({
            ...course,
            status: "In Progress",
          }))
        );
      } catch (error) {
        setError("Failed to fetch episode data");
      }
    };

    loadcourses();
  }, []);

  if (error) return <p>{error}</p>;

  const handleDeleteCourse = (id: string) => {
    setcourses(courses.filter((course) => course.id !== id));
  };

  const handleCompletedStatus = (id: string) => {
    setcourses(
      courses.map((course) =>
        course.id === id
          ? {
              ...course,
              status:
                course.status === "In Progress" ? "Completed" : "In Progress",
            }
          : course
      )
    );
  };

  return (
    <>
      <Topbar />
      <Sidebars />
      <div className="courses">
        <h1>Courses</h1>
        <h2>
          <span style={{ color: "gray" }}>
            <i
              className="fa-solid fa-table-cells-large"
              style={{ marginRight: ".5rem" }}
            ></i>
            Dashboard/
          </span>
          Courses
        </h2>
        <div className="table">
          <div className="top">
            <h2>List Of Courses</h2>
            <button> + Request new course</button>
          </div>
          <tr style={{ backgroundColor: "#1D3A4C", color: "white" }}>
            <th style={{ padding: "1rem" }}>CourseID</th>
            <th>CourseName</th>
            <th>Enrollment Date</th>
            <th>Duration</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          {courses.map((course) => (
            <tr >
              <td key={course.id}>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.air_date}</td>
              <td>1 month</td>
              <td>{course.status}</td>
              <td>
                <i
                  className="fa-solid fa-check"
                  style={{ color: "green", cursor: "pointer" }}
                  onClick={() => handleCompletedStatus(course.id)}
                ></i>
                <i
                  className="fa-solid fa-xmark"
                  style={{
                    color: "red",
                    paddingLeft: "2rem",
                    paddingRight: "1rem",
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteCourse(course.id)}
                ></i>
              </td>
            </tr>
          ))}
        </div>
      </div>
    </>
  );
};

export default Courses;
