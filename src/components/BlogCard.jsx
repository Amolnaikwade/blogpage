import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({ blog }) {
  return (
    <article className="blog-card" tabIndex={0}>
      <div className="thumb" style={{backgroundImage:`url(${blog.image})`}} aria-hidden></div>
      <div className="card-body">
        <h3 className="card-title">{blog.title}</h3>
        <p className="meta">{blog.date}</p>
        <p className="excerpt">{blog.excerpt}</p>
        <Link to={`/blog/${blog.id}`} className="read-more">Read more →</Link>
      </div>
    </article>
  )
}
