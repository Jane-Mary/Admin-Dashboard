import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Courses from "./pages/courses";
import Layout from "./Layout/layout";

const Routers: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Routers;
