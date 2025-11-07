
import React from "react";
import { useParams, Link } from "react-router-dom";
import blogsData from "../data/blogs.json";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 style={{ textAlign: "center", margin: "2rem" }}>Blog not found.</h2>;
  }

  return (
    <div className="blog-details">
      <img src={blog.image} alt={blog.title} className="details-image" />
      <div className="details-content">
        <h2>{blog.title}</h2>
        <p className="date"><i className="far fa-clock"></i> {blog.date}</p>
        <p>{blog.text1}</p>
        <p>{blog.text2}</p>

        {/* Add more text paragraphs below */}
      

        <Link to="/">
          <button className="back-btn">← Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogDetails;
