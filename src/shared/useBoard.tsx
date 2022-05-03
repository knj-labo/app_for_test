import React, { useCallback, useMemo, useState } from 'react';

import type { Marker } from './Board';
import {
    ReactNode
} from "../../../../../../../Applications/WebStorm.app/Contents/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

type UseBoardProps = {
    initialBoards : Marker[]
    initialPlayer: Marker;
    initialWinner: string
}

type UseBoardResult = {
    winner: string;
    player: string;
    boards: any[];
    handlePlayClick: (index: number) => void;
    handleResetClick: () => void;
}

export const useBoard = ({ initialBoards, initialWinner, initialPlayer }: UseBoardProps):UseBoardResult => {
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

  useMemo(() => {
    if (isWinner(boards)) {
      setWinner(player === 'O' ? 'X' : 'O');
      return;
    }
    const result = player === 'O' ? 'X' : 'O';
    setPlayer(result);
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

  return {
    winner,
    player,
    boards,
    handlePlayClick,
    handleResetClick,
  };
};
