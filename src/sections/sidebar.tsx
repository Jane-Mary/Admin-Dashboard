import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebars: React.FC = () => {
  return (
    <>
      <Sidebar
        style={{
          backgroundColor: "#1D3A4C",
          fontSize: "x-large",
          color: "white",
          marginTop: "-7rem",
          paddingTop: "3rem",
          position:"static"
        }}
      >
        <Menu style={{ backgroundColor: "#1D3A4C", height: "85rem" }}>
          <img
            src="./src/assets/Group.png"
            style={{ width: "7rem", marginBottom: "3rem", marginLeft: "4rem" }}
          />
          <MenuItem component={<Link to="/home" />} style={{ marginBottom: "1rem"}}>
            <i
              className="fa-solid fa-table-cells-large"
              style={{ marginRight: "2rem"}}
            ></i>
            Dashboard{" "}
          </MenuItem>
         
          <MenuItem component={<Link to="/courses" />}  style={{ marginBottom: "1rem"}}>
            <i
              className="fa-regular fa-file"
              style={{ marginRight: "3.5rem" }}
            ></i>
            Courses{" "}
          </MenuItem>
          <MenuItem component={<Link to="/home" />}  style={{ marginBottom: "1rem"}}>
            <i className="fa-solid fa-user" style={{ marginRight: "3rem" }}></i>
            My Profile
          </MenuItem>
          <MenuItem component={<Link to="/home" />}  style={{ marginBottom: "1rem"}}>
            <i
              className="fa-solid fa-pen-to-square"
              style={{ marginRight: "5rem" }}
            ></i>
            Notes
          </MenuItem>
          <MenuItem component={<Link to="/home" />}  style={{ marginBottom: "1rem"}}>
            <i
              className="fa-solid fa-address-book"
              style={{ marginRight: "6rem" }}
            ></i>
            Kids
          </MenuItem>
          <MenuItem component={<Link to="/home" />}  style={{ marginBottom: "1rem"}}>
            <i
              className="fa-regular fa-comment-dots"
              style={{ marginRight: "6rem" }}
            ></i>
            Chat
          </MenuItem>
          <MenuItem component={<Link to="/home" />}  style={{ marginBottom: "1rem"}}>
            <i
              className="fa-regular fa-calendar"
              style={{ marginRight: "4rem" }}
            ></i>
            Calendar
          </MenuItem>
      
          <Link to="/">
            <button
              style={{
                backgroundColor: "#E2DDBF",
                width: "12rem",
                borderRadius: "3px",
                padding: "10px",
                color: "black",
                cursor: "pointer",
              }}
              onClick={() => localStorage.removeItem("isLoggedIn")}
            >
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                style={{ marginRight: "2rem" }}
              ></i>
              Log Out
            </button>
          </Link>
        </Menu>
      </Sidebar>
      ;
    </>
  );
};

export default Sidebars;
