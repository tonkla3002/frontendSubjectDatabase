"use client"
import React from 'react'
import BarChart from '../components/BarChart'
import NavbarDash from '../components/NavbarDash'
import TopPage from '../components/tableTop'
import UserInfo from '../components/UserInfo'


function dashBoardPage() {

  


  return (
    <div className="">
      <NavbarDash />
      <UserInfo/>
      <div className='container mx-auto mt-10'>
        <div className="mb-10">
          <TopPage />
        </div>

        <div className="mt-10">
          <BarChart />
        </div>
      </div>
    </div>
  )
}

export default dashBoardPage