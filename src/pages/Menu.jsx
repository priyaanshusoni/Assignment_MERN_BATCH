import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FoodCard from '../components/FoodCard';
import axios from 'axios';

const MenuContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 80px 20px 20px 20px; /* Adjust padding to avoid overlap with fixed header */
  background: url('/food-background.jpg') no-repeat center center/cover;
  background-size: cover;
`;

const Menu = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    // Mock API call
    axios.get('/api/foods').then(response => {
      setFoods(response.data);
    });
  }, []);

  return (
    <MenuContainer>
      {foods.map(food => (
        <FoodCard key={food.id} food={food} />
      ))}
    </MenuContainer>
  );
};

export default Menu;
