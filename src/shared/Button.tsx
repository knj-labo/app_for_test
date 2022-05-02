import React from 'react';
import styled from '@emotion/styled';

type Props = {
    onClick: () => void;
};

const StyledButton = styled.button`
  font-size: 16px;
  padding: 8px 0;
  width: 240px;
  border: 1.5px solid #555;
  border-radius: 100px;
  background-color: transparent;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #555;
    color: white;
  }
`;

export const Button = ({ onClick }: Props): JSX.Element => (
  <StyledButton type="button" onClick={onClick}>
    Reset
  </StyledButton>
);
