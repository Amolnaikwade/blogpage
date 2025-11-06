import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import blogs from '../data/blogs'

export default function BlogDetail(){
  const { id } = useParams()
  const navigate = useNavigate()
  const blog = blogs.find(b => b.id === id)

  if(!blog) return (
    <div className="container notfound">
      <h2>Blog not found</h2>
      <button onClick={() => navigate(-1)} className="btn">Go back</button>
    </div>
  )

  return (
    <article className="container blog-detail">
      <button className="back" onClick={() => navigate(-1)}>← Back</button>
      <h1>{blog.title}</h1>
      <p className="meta">{blog.date}</p>
      <div className="detail-image" style={{backgroundImage:`url(${blog.image})`}} />
      <div className="content" dangerouslySetInnerHTML={{__html: blog.content}} />
    </article>
  )
}
