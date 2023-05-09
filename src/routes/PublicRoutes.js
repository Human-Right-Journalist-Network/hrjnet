import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactUs from '../pages/ContactUs'
import Home from '../pages/Home/Home'
import Media from '../pages/Media'
import Donation from '../pages/Donation'
import Blog from '../pages/blog/Blog'
import Projects from '../pages/projects/Projects'
import AboutUs from '../pages/AboutUs';
import WhatWeDo from '../pages/WhatWeDo';


export default function PublicRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about_us" element={<AboutUs />} />
      <Route exact path="/media" element={<Media />} />
      <Route exact path="/what_we_do" element={<WhatWeDo />} />
      <Route exact path="/contact" element={<ContactUs />} />
      <Route exact path="/donation" element={<Donation />} />
      <Route exact path="/blog" element={<Blog/>} />
      <Route exact path="/projects" element={<Projects/>} />
    </Routes>
  )
}
