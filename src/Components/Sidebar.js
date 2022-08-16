import {
  AccessibilityNewOutlined,
  AccountCircleOutlined,
  Dashboard, ExitToApp, HelpCenter,
  PanTool
} from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';




const Sidebar = () => {

  return (
    <>
      <div className='sidebar'>
        <div className='top'>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className='logo'>DBM</span>
          </Link>
        </div>
        <hr />
        <div className='center'>
          <ul>
            <p className="title">MAIN</p>
            <li>
              <Dashboard className='icon' />
              <span>Dashboard</span>
            </li>
            <p className="title">SERVICE</p>
            <Link to="/dashboard/Attendance" style={{ textDecoration: "none" }}>
              <li>
                <AccessibilityNewOutlined className="icon" />
                <span>Attendance</span>
              </li>
            </Link>
            <Link to="/dashboard/Leave" style={{ textDecoration: "none" }}>
              <li>
                <PanTool className="icon" />
                <span>Leave</span>
              </li>
            </Link>
            <Link to="/dashboard/HelpDesk" style={{ textDecoration: "none" }}>
              <li>
                <HelpCenter className="icon" />
                <span>HelpDesk</span>
              </li>
            </Link>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlined className="icon" />
              <span>Profile</span>
            </li>
            <li>
              <ExitToApp className="icon" />
              <span>Logout</span>
            </li>
            {/* </ul> */}
          </ul>
        </div>
        <div className="bottom">
          <div
            className="colorOption"

          ></div>
          <div
            className="colorOption"

          ></div>
        </div>
      </div>

    </>
  )
}

export default Sidebar