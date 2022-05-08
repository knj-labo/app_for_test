import React from 'react';
import styled from '@emotion/styled';
import { Board } from './Board';
import { useBoard } from './useBoard';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Game = () => {
  const initialWinner = '';
  const initialPlayer = 'O';
  const initialBoards = Array(9).fill('');
  const props = useBoard({ initialBoards, initialPlayer, initialWinner });

  return (
    <Main>
      <Board {...props} />
    </Main>
  );
};
