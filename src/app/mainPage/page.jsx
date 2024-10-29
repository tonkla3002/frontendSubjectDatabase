import React from 'react'
import Navbar from '../components/Navbar'


function mainPage() {
  return (
    <div className="">
      <Navbar />
      <div className="">
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
          <div className="text-center p-10 bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold text-white mb-6">
              Welcome to Full Body Measurements 
            </h1>
            <p className="text-lg text-gray-300">
              Explore comprehensive insights into body measurements and health data.
            </p>
            {/* คุณสามารถเพิ่มเนื้อหาเพิ่มเติมที่นี่ */}
          </div>
        </div>
      </div>



    </div>

  )
}

export default mainPage