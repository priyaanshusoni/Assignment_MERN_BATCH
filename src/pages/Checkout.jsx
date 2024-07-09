import React from 'react';
import styled from 'styled-components';

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 80px 20px 20px 20px; /* Adjust padding to avoid overlap with fixed header */
  background: url('/food-background.jpg') no-repeat center center/cover;
  color: white;
  text-align: center;
`;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <h1>Checkout</h1>
      <p>Your cart is empty.</p>
    </CheckoutContainer>
  );
};

export default Checkout;
