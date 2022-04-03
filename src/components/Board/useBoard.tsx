import React,{ useState, useMemo } from 'react';

type Maker = 'X' | 'O';
type Board = ReadonlyArray<number[]>;

type UseBoardProps = {
   initialValues: any[];
   initialPlayer: Maker;
   initialWinner: string;
};
export type UseBoardResult = {
   winner: string;
   player: string;
   boards: any[];
   handlePlayClick: (index: number) => void;
   handleResetClick: () => void;
   renderStatus: () => JSX.Element;
};

export const useBoard = ({ initialValues, initialPlayer, initialWinner }: UseBoardProps): UseBoardResult => {
   const [winner, setWinner] = useState<string>(initialWinner);
   const [boards, setBoards] = useState<any[]>(initialValues);
   const [player, setPlayer] = useState<Maker>(initialPlayer);

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

   const isWinner = (values: number[]) => {
      for (const [i, j, k] of lines) {
         if (values[i] && values[i] === values[j] && values[j] === values[k]) {
            return true;
         }
      }
      return false;
   };

   useMemo(() => {
      if (isWinner(boards)) {
         setWinner(player);
         return;
      }
      setPlayer(player === 'O' ? 'X' : 'O');
   }, [boards]);

   const handlePlayClick = (index: number) => {
      if (winner) return;
      if (boards[index]) return;
      setBoards((prevBoards) => prevBoards.map((board, _index) => (_index === index ? player : board)));
   };

   const handleResetClick = () => {
       setBoards(initialValues);
      setPlayer(initialPlayer);
      setWinner(initialWinner);
   };

   const renderStatus = () => (
         <h3>
            Player: {player}
            {winner && `| Winner: ${winner}`}
         </h3>
      );

   return {
      winner,
      player,
      boards,
      handlePlayClick,
      handleResetClick,
      renderStatus,
   };
};
