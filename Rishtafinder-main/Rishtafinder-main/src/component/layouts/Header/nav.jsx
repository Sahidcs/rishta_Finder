import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import LoginIcon from '@mui/icons-material/Login';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import './nav.css';

function Nav() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const navbarStyle = {
    backgroundColor: 'white',
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar navbar-light`} style={navbarStyle}>
        <div className="container-fluid">
          <div className="menu_icon" onClick={toggleSidebar}>
            <i className="bi bi-list"></i>
            <a className="navbar-brand" href="#">
              RishtaFinder
            </a>
          </div>
          <div className="searchBox flex_box">
            <form action="">
              <input type="text" name="" id="" className="search_input" placeholder='Search' />
              <i className="bi bi-search search_icon"></i>
            </form>
            <div className='nav_icons'>
              <Badge color="secondary" badgeContent={1}>
                <MailIcon />
              </Badge>
              <Badge color="secondary" badgeContent={1}>
                <ChatIcon />
              </Badge>
              <LoginIcon />
            </div>
          </div>
        </div>
      </nav>
      <div className={`sidebar ${sidebarOpen ? 'sidebarIncreased' : ''}`}>
        <div className="sidebarelement">
          <a href=""><HomeOutlinedIcon /><p>Home</p></a>
          <a href=""><BookmarkBorderOutlinedIcon /><p>Marked</p></a>
          <a href=""><SaveOutlinedIcon /><p>Saved</p></a>
          <a href=""><AccountCircleOutlinedIcon /><p>Account</p></a>
          <a><AddOutlinedIcon /><p>Add</p></a>
          <a href=""><ChatIcon /><p>Chat</p></a>
          <a href=""><MailIcon /><p>Mail</p></a>
          <a href=""><ContactSupportOutlinedIcon /><p>Contacts</p></a>
          <a href=""><ReviewsOutlinedIcon /><p>Reviews</p></a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
