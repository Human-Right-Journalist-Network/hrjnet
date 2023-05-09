import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home/Home'
import Media from '../pages/Media'
import Donation from '../pages/Donation'
import Blog from '../pages/blog/Blog'
import Projects from '../pages/projects/Projects'


export default function PublicRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/media" element={<Media />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/donation" element={<Donation />} />
      <Route exact path="/blog" element={<Blog/>} />
      <Route exact path="/projects" element={<Projects/>} />
    </Routes>
  )
}
