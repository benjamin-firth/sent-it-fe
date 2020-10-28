import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import profilePic from '../../images/no-profile-img.png';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledHeader>
      <StyledImageContainer>
        <img src={profilePic} alt='Profile picture'></img>
      </StyledImageContainer>
      <h3>Benjamin Firth</h3>
      <MenuIcon 
        fontSize="large" 
        aria-controls="simple-menu" 
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Add Climbs</MenuItem>
        <MenuItem onClick={handleClose}>Other Climbers</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </StyledHeader>
  );
};

const StyledHeader = styled.section`
  align-items: center;
  background-color: #101628;
  color: #CAD1EE;
  display: flex;
  height: 12vh;
  justify-content: space-between;
  padding: 0px 10px;
`;

const StyledImageContainer = styled.section`
  border: 1px solid #CAD1EE;
  border-radius: 10px;
  height: 8vh;

  img {
    height: 100%;
  }
`;

export default Header;