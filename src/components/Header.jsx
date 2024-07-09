import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.nav`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5em;
  color: white;
  font-weight: bold;
`;

const NavLinks = styled.div`
  & > a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    font-size: 1.2em;
    transition: color 0.3s;

    &:hover {
      color: #ff6347;
    }
  }
`;

const Header = () => {
  return (
    <NavBar>
      <Logo>FoodDelivery</Logo>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/checkout">Checkout</Link>
      </NavLinks>
    </NavBar>
  );
};

export default Header;
