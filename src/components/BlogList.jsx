import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import blogsData from "../data/blogs.json";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => setBlogs(blogsData), []);

  return (
    <section className="posts" id="posts">
      <div className="posts-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="post">
            <img src={blog.image} alt={blog.title} className="image" />
            <div className="date">
              <i className="far fa-clock"></i>
              <span>{blog.date}</span>
            </div>
            <h3 className="title">{blog.title}</h3>
            <p className="text">{blog.text1}</p>

            <Link to={`/blog/${blog.id}`}>
              <button className="read-more">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
