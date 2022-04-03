import React from 'react';
import { Button } from '@/components/Button/Button';
import { Square } from '@/components/Square/Square';
import styled from '@emotion/styled';

type Props = {
   winner: string;
   player: string;
   boards: any[];
   handlePlayClick: (index: number) => void;
   handleResetClick: () => void;
   renderStatus: () => JSX.Element;
};

const Squares = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 315px;
  height: 300px;
  margin: 0 auto;
`

const Div = styled.div`
  padding: 24px;
  text-align: center;
`

export const Board = ({
   winner,
   player,
   boards,
   handlePlayClick,
   handleResetClick,
   renderStatus,
}: Props): JSX.Element => {
   return (
      <div>
         <Squares>
            {boards.map((marker, index) => (
               <Square key={index} index={index} onClick={handlePlayClick} marker={marker} />
            ))}
         </Squares>
         <Div>
            {renderStatus()}
            <Button onClick={handleResetClick} />
         </Div>
      </div>
   );
}
