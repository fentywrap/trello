import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  border-radius: 4px;
  padding: 8px;
  margin: 4px 0;
`;

const Card = ({ text }) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
