import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import AdminCard from './AdminCard'

const Dashboard = () => {
  return (
    <>
      <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <Navbar />
          <div>
          <AdminCard />
          </div>
        </div>
      </div>
      

    </>
  )
}

export default Dashboard
