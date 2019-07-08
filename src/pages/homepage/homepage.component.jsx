import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.style.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1 style={{ textAlign: "center" }}> CRWN</h1>
      <Directory />
    </div>
  );
};

export default Homepage;
