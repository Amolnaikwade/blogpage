import React from "react";
import "./Sidebar.css";

const Sidebar = () => (
  <aside className="sidebar">
    <div className="box">
      <h3>About Meditation Cafe</h3>

      <img src="/about/profile.jpg" alt="Rupam" className="profile-img" />

      <p className="about-text">
        Meditation Cafe is started by alumni of the <strong>University of Minnesota, USA</strong> 
        and <strong>MIT</strong>. Our main goal is to help individuals subside the 
        internal chattering of the mind and attain a peaceful state of being 
        through regular meditation practice.
      </p>

      <p className="author-name">— Rupam</p>
    </div>
  </aside>
);

export default Sidebar;
