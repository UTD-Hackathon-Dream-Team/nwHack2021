import React from "react";
import Navbar from "../components/Navbar";
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div className="dashboard">
      <Navbar />
      <h1>Dashboard</h1>
      <button>
        <Link to="/">Logout</Link>
      </button>
    </div>
  );
}

export default Home;
