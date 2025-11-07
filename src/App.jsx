import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BlogList from "./components/BlogList";
import Sidebar from "./components/Sidebar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlogDetails from "./components/BlogDetails";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <main className="container">
                <BlogList />
                <Sidebar />
              </main>
              <Contact />
            </>
          }
        />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
