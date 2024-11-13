import React from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import MenuItemLink from "./sidebar-content";

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
          position: "static",
        }}
      >
        <Menu style={{ backgroundColor: "#1D3A4C", height: "85rem" }}>
          <img
            src="./src/assets/Group.png"
            style={{ width: "7rem", marginBottom: "3rem", marginLeft: "4rem" }}
          />
          <MenuItemLink to="/home" icon="fa-solid fa-table-cells-large" label="Dashboard" />

          <MenuItemLink to="/courses" icon="fa-regular fa-file" label="Courses" />

          <MenuItemLink to="/home" icon="fa-solid fa-user" label="My Profile" />
          
          <MenuItemLink to="/home" icon="fa-solid fa-pen-to-square" label="Notes" />
          
          <MenuItemLink to="/home" icon="fa-solid fa-address-book" label="Kids" />
          
          <MenuItemLink to="/home"  icon="fa-regular fa-comment-dots" label="Chat" />
          
          <MenuItemLink to="/home" icon="fa-regular fa-calendar" label="Calendar" />

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
    </>
  );
};

export default Sidebars;
