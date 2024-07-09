import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  margin: 15px;
  text-align: center;
  width: 250px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FoodImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
`;

const FoodCard = ({ food }) => {
  return (
    <Card>
      <FoodImage src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>${food.price}</p>
    </Card>
  );
};

export default FoodCard;
