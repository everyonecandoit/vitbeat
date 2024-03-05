import React from 'react'
// import hero from '../public/assets/back.jpg'


const Hero = () => {
  return (
    <div className="relative  overflow-y-hidden ">
    {/* Background Image */}
    <div className="h-screen mt-4 p-4">
    <img
      src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
      alt="fabric"
      className="rounded-2xl w-full"
    />
    </div>

    {/* Overlay */}
    {/* <div className="absolute top-0 left-0 w-full h-full  opacity-5"></div> */}

    {/* Text Container */}
    <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center  mx-2 my-4 ">
      <div>
        <h1 className="text-5xl  lg:text-9xl md:text-9xl  font-bold  font-Noto  pl-8 text-gray-200">VitBeat</h1>
        <h3 className="mt-2  lg:text-3xl  lg:font-thin pl-8  ">By Vit for Vit</h3>
      </div>
    </div>

   

    </div>
  )
}

export default Hero