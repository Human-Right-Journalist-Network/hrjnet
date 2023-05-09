import React from 'react'
import MainLayout from '../../layouts/Index'
import Header from '../../layouts/Header/Index'

export const Home = () => {
  return (
   <MainLayout>
    <Header />
    <div className="container">
      
        Home page is here!
    </div>
   </MainLayout>
  )
}

export default Home