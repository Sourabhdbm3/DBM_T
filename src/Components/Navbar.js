import React from 'react'
import {
  ChatBubbleOutlineOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  LanguageOutlined,
  ListOutlined,
  NotificationAddOutlined,
  SearchOutlined
} from '@mui/icons-material';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" placeholder="Search..." />
            {/* <SearchOutlinedIcon /> */}
            <SearchOutlined />
          </div>
          <div className="items">
            <div className="item">
              {/* <LanguageOutlinedIcon className="icon" /> */}
              <LanguageOutlined className="icon" />

              English
            </div>
            <div className="item">
              <DarkModeOutlined
                className="icon"
                // onClick={() => dispatch({ type: "TOGGLE" })}
              />
            </div>
            <div className="item">
              <FullscreenExitOutlined
                className="icon" />
            </div>
            <div className="item">
              <NotificationAddOutlined
                className="icon" />
              <div className="counter">1</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineOutlined
                className="icon" />
              <div className="counter">2</div>
            </div>
            <div className="item">
              <ListOutlined
                className="icon" />
            </div>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="D"
                className="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
