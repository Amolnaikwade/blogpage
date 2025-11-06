import React from 'react'
import blogs from '../data/blogs'
import BlogCard from '../components/BlogCard'

export default function Home() {
  return (
    <section className="home">
      <div className="hero container">
        <h1>Clean & Modern Blog</h1>
        <p className="lead">Readable typography, lightweight animations, and quick edits.</p>
      </div>

      <div className="container grid">
        {blogs.map(b => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
    </section>
  )
}
