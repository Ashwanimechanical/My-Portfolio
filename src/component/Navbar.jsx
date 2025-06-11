import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: rgb(26, 26, 46);
  box-shadow: none; 
  border-bottom: 1rem; 
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  display: flex;
  align-items: center;
  
  img {
    height: 30px; /* Adjust logo size */
    margin-right: 10px;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: white;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &.active {
    display: flex;
  }
`;

const sack = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
  100% { transform: rotate(0deg); }
`;

const NavItem = styled.li`
  margin-left: 1.5rem;
  cursor: pointer;
  font-weight: 600;
  position: relative;

  a {
    text-decoration: none;
    color: white; /* Fixed color issue */
    transition: color 0.3s ease;
  }

  &:hover a {
    color: #552288;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s ease;
  }

  &:hover::after, &.active::after {
    background-color: #663399;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid #ddd;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const NavConnect = styled.div`
  background-color: rgba(251, 251, 252, 0.71);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: white; /* Changed color to white */
    margin-bottom: 4px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <NavbarContainer>
      {/* <Logo>
        <img src="#" alt="#" /> 
        Ashwani
      </Logo> */}
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavMenu className={menuActive ? 'active' : ''}>
        <NavItem><a href="#home">Home</a></NavItem>
        <NavItem><a href="#about">About</a></NavItem>
        <NavItem><a href="#skills">Skills</a></NavItem>
        <NavItem><a href="#work">Work</a></NavItem>
        <NavItem><a href="#contact">Contact</a></NavItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;
