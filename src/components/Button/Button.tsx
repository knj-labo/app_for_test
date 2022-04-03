import React from 'react';
import styled from '@emotion/styled';

type Props = {
   onClick: () => void;
};

const StyledButton = styled.button`
  font-size: 16px;
  padding: 8px 16px;
  border: 1.5px solid #555;
  border-radius: 100px;
  background-color: transparent;

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #555;
    color: white;
  }
`

export function Button({ onClick }: Props): JSX.Element {
   return (
      <StyledButton type="button" onClick={onClick}>
         Reset
      </StyledButton>
   );
}
