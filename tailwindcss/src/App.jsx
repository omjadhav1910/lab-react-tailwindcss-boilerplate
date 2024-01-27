// import { useState } from 'react'
// import './App.css'

function App() {
 
  return (
    <div>
      
      <div className="h-1 bg-blue-800"></div>
      <nav className='flex justify-between bg-red-400 h-100 p-6'>

      <div className=''>
          <span className='font-bold text-xl text-white'>Kalvium</span>
          <a href="" className='ml-5 mr-5 text-red-100'>About us</a>
          <a href="" className='mr-5 text-red-100'>Contacts</a>
          <a href="" className='text-red-100'>Courses</a>
        </div>

        <button className="outline outline-2 text-white px-5 py-1 hover:bg-red-500">Login</button>
      </nav>
      <div className='cointainer m-auto '>
        <button className=' bg-blue-500 m-10 px-4 py-2 text-white font-bold rounded '>Button One</button>

        <div className='alert-box bg-red-50 border border-red-500 text-red-700 p-4 mt-5 rounded'>
          <span className='font-bold'>Alert !</span> This is awesome</div>
        <div className='m-auto flex w-fit space-x-2 mt-10 '>
          <img className='w-24' src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
          <div className='ml-5'>

            <h3 className='font-bold'>Kalvium Store</h3>
            <p className='text-gray-500'>You have a new course!</p>

          </div>
        </div>


      </div>

      <div className=' border bg-gray-200 h-100 p-6 mt-60 '>
        <h4 className="text-center"> © 2023 Copyright: Kalvium</h4>

      </div>


    </div>
  )
}

export default App
