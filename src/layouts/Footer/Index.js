import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../white_logo.png'

export default function Footer() {
  return (
    <footer className="footer-1 py-8 sm:py-12 text-white bg-[#0B0706]" >
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <img className="block h-14 w-auto" src={logo} />
              </Link>
            </div>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0 text-left" >
            <h5 className="text-xl font-bold mb-6">Our Team</h5>
            <ul className="list-none footer-links ">
            <li className="mb-2"><a href="#" className="">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-left">Team</a></li>
              <li className="mb-2"><a href="#" className="">What We Do</a></li>
              <li className="mb-2"><a href="/media" className="">Media</a></li>
              <li className="mb-2"><a href="contact" className="">Contact</a></li>
            </ul>
          </div>

          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0 text-left" >
            <h5 className="text-xl font-bold mb-6">More</h5>
            <ul className="list-none footer-links ">
            <li className="mb-2"><a href="/projects" className="">Projects</a></li>
              <li className="mb-2"><a href="#" className="text-left">Events</a></li>
              <li className="mb-2"><a href="#" className="">Donate</a></li>
              <li className="mb-2"><a href="#" className="">Blog</a></li>
            </ul>
          </div>

          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0 text-left" >
            <h5 className="text-xl font-bold mb-6">Connect</h5>
            <ul className="list-none footer-links ">
            <li className="mb-2"><a href="#" className="">Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-left">Twitter</a></li>
              <li className="mb-2"><a href="#" className="">Instagram</a></li>
              <li className="mb-2"><a href="#" className="">LinkedIn</a></li>
            </ul>
          </div>
          <div className="w-80" >
            <h3 className="text-2xl font-bold mb-6 sm:text-center xl:text-left">Subscribe to get latest updates</h3>
            <div className="flex sm:justify-center xl:justify-start">
              <div className="md:mb-6">
                <input type="text" className="form-control w-full px-3 py-1.5 text-base font-normal bg-white 
                  border-radius border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput1" placeholder="Your Email Address"/>
                  <h3>Subscribe</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
