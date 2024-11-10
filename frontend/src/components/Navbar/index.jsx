import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/user-profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust if using a different auth method
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUsername(data.username); // Ensure `username` matches the backend response field
        } else {
          console.error("Failed to fetch username:", data.message);
        }
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };
  
    fetchUsername();
  }, []);
  

  return (
    <>
      <div className="main-page">
        <nav id="navbar">
          <h1 className="logo">
            Job<span>Hunt</span>
          </h1>

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/post-job">Post Job</Link>
            </li>
            <li>
              <Link to="/saved-job">Saved Job</Link>
            </li>
            <li>
              <Link to="#"><span >{username || "Profile"}</span></Link>
            </li>
          </ul>

        </nav>
      </div>
    </>
  );
};

export default Navbar;
