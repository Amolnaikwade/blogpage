import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} MyLightBlog — Built with React + Vite</p>
      </div>
    </footer>
  )
}
