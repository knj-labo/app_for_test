import React, { useState, useCallback, useMemo } from 'react';
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
  const initialWinner = '';
  const initialPlayer = 'O';
  const initialBoards = Array(9).fill('');
  const [boards, setBoards] = useState<Marker[]>(initialBoards);
  const [winner, setWinner] = useState<string>(initialWinner);
  const [player, setPlayer] = useState<Marker>(initialPlayer);

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isWinner = (values: Marker[]) => {
    for (const [i, j, k] of lines) {
      if (values[i] && values[i] === values[j] && values[j] === values[k]) {
        return true;
      }
    }
    return false;
  };

  console.log(boards.every((marker) =>  marker !==''));
  useMemo(() => {
    if (isWinner(boards)) {
      // boards.every((marker) =>  marker !=='')
      setWinner(player);
      return;
    }
   const result = player ===  'O' ? 'X' : 'O';
    setPlayer(result)
  }, [boards]);

  const handlePlayClick = useCallback((index: number) => {
    if (winner) return;
    if (boards[index]) return;
    setBoards((prevBoards) => prevBoards.map((board, _index) => (_index === index ? player : board)));
  }, [winner, boards]);

  const handleResetClick = useCallback(() => {
    setBoards(initialBoards);
    setPlayer(initialPlayer);
    setWinner(initialWinner);
  }, []);
  return (
    <div>
      <h3>
        Player: {player}
        {winner && `| Winner: ${winner}`}
      </h3>
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
