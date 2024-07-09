import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('/food-background.jpg') no-repeat center center/cover;
  background-size: cover;
  color: white;
  text-align: center;
  padding: 50px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  color: white;
  background-color: #ff6347;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4500;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <h1>Welcome to FoodDelivery</h1>
      <p>Delivering delicious food to your door.</p>
      <Link to="/menu">
        <Button>Order Now</Button>
      </Link>
    </HomeContainer>
  );
};

export default Home;
