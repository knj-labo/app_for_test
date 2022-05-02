import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';

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
  const initialBoards = Array(9).fill('');
  const [boards, setBoards] = useState<Marker[]>(initialBoards);

  const handleResetClick = useCallback(() => {
    setBoards(initialBoards);
  }, []);
  return (
    <div>
      <Squares>
        {boards.map((marker, index) => (
          <Square key={index} index={index} marker={marker} />
        ))}
      </Squares>
      <Box>
        <Button onClick={handleResetClick} />
      </Box>
    </div>
  );
};
