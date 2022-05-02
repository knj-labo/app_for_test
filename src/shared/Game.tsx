import React from 'react';
import styled from '@emotion/styled';
import { Board } from './Board';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Game = () => (
  <Main>
    <Board />
  </Main>
);
