import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import AdminCard from './AdminCard'
// import DataTable from './DataTable'
import RowOption from './RowOption'
import AdminTable from './AdminTable'

const Dashboard = () => {
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
              imgsrc="https://static.thenounproject.com/png/1878098-200.png"
              title="Leave"
              btn="Button"
            />
            <AdminCard
              imgsrc="https://static.thenounproject.com/png/3884205-200.png"
              title="Help"
              btn="Button"
            />
          </div>
          <div className="OptionRow">
            <RowOption />
          </div>
          <div className="Data_Table">
            <AdminTable/>
          </div>
        </div>
      </div>


    </>
  )
}

export default Dashboard
