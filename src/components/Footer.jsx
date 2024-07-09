import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; 2023 FoodDelivery. All Rights Reserved.
    </FooterContainer>
  );
};

export default Footer;
