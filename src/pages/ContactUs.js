import React from 'react'
import MainLayout from '../layouts/Index'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 bg-[#EBF0F9]">
        <div className="row-span-3 col grid-rows-4 grid-flow-col">
          <div className="flex gap-3 p-12">
            <p className="col-md-4 bg-black h-0.5 w-32 mt-2.5"></p>
            <p className="">CONTACT US</p>
          </div>

          <div className="px-16 pb-[30px] space-y-4">
            <p className="text-[46px] font-bold font-Roboto leading-tight">
              We'd love to hear <br />from you
            </p>
            <p className="capitalize text-[13px]">
              Have any question in mind or want to enquire? Please feel free to <br />contact us through the form or the following details.
            </p>
          </div>
        </div>

        <div className="container rounded m-10 ml-[-30px]">
          <div className="row-span-3 col grid-rows-4 grid-flow-col">
            <div className="flex gap-3 p-12">
              <div className="row-span-3 col grid-rows-4 grid-flow-cols">
                <p className="text-[23px] font-bold"> Let's talk! </p>
                <div className="flex gap-12 mt-3 ">
                  <p>+1 23 456 789 </p>
                  <p>hello@hrnjnetwork.com</p>
                </div>
                <div className="grid gap-3 mt-12">
                  <p className="font-bold text-[23px]">Head Office </p>
                  <p>8 Brewery Drive, Hudson, NH 03051 <br /> USA</p>
                </div>
                <div className="grid gap-3 mt-12">
                  <p className='text-[23px] font-bold'>Branch Office  </p>
                  <p>178 Marconi St., Venice, 34293 <br />Italy</p>
                </div>

                <div className="flex text-[30px] text-emerald-400 gap-6 mt-8">
                  <Link to="/https://facebook.com/hrnjnetwork">
                    <button ><BsFacebook className="" /></button>
                  </Link>

                  <Link to="/https://facebook.com/hrnjnetwork">
                    <button ><BsTwitter className="" /></button>
                  </Link>

                  <Link to="/https://facebook.com/hrnjnetwork">
                    <button ><BsLinkedin className="" /></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex min-h-[59vh] p-3 items-center flex-start bg-white">
        <div className="mx-auto w-full max-w-screen-lg">
          <h1 className="text-4xl font-medium">Contact us</h1>
          <p className="mt-3">Email us at help@hrnjnetwork.com or message us here:</p>

          <div className="mt-3">
            {/* <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" /> */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="relative z-0">
                <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">First Name</label>
              </div>
              <div className="relative z-0">
                <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Last Name</label>
              </div>
              <div className="relative z-0">
                <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Email Address</label>
              </div>
              <div className="relative z-0">
                <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Subject</label>
              </div>
              <div className="relative z-0 col-span-2 rounded">
                <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your message</label>
              </div>
            </div>
            <button type="submit" className="mt-5 font-bold rounded-md bg-emerald-400 px-10 py-2 text-white">Send Message</button>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-start bg-white">
        <div className="mx-auto w-full">
         <img src="../assets/Map.png" className="img-responsive" alt=""/>
        </div>
      </div>
    </MainLayout>
  )
}

export default ContactUs