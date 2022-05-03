import React, { useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';

import { useBoard } from './useBoard';
import { Square } from './square';
import { Button } from './Button';

export type Marker = 'O' | 'X' | '';

const Squares = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 315px;
  height: 300px;
  margin: 0 auto;
`;

const Box = styled.div`
  margin-top: 64px;
  text-align: center;
`;

export const Board = () => {
  const initialWinner = '';
  const initialPlayer = 'O';
  const initialBoards = Array(9).fill('');
  const {
    winner, player, boards, handlePlayClick, handleResetClick, renderGameStatus,
  } = useBoard({ initialBoards, initialPlayer, initialWinner });
  return (
    <div>
      {renderGameStatus()}
      <Squares>
        {boards.map((marker, index) => (
          <Square key={index} index={index} marker={marker} onClick={handlePlayClick} />
        ))}
      </Squares>
      <Box>
        <Button onClick={handleResetClick} />
      </Box>
    </div>
  );
};
