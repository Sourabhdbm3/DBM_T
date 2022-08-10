import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import AdminCard from './AdminCard'

const Attendance = () => {
  return (
    <>
      <div className='home'>
        <Sidebar />
        <div className='homeContainer'>
          <Navbar />
          <div className="cardContainer">
            <AdminCard
              imgsrc="https://static.thenounproject.com/png/3649886-200.png"
              title="Attendance"
              btn="Button"
            />
            <AdminCard

              imgsrc="https://static.thenounproject.com/png/3649886-200.png"
              title="Total_Present"
              btn="Button"
            />
            <AdminCard
              imgsrc="https://static.thenounproject.com/png/3649886-200.png"
              title="Total_Absent"
              btn="Button"


            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Attendance