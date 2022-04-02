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

  & > * {
    width: 100px;
    height: 100px;
    border: 3px solid #555;

    font-size: 32px;
    text-align: center;
    line-height: 100px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #d3cce3;
    }

    &:nth-child(-n + 3) {
      border-top: unset;
    }

    &:nth-last-child(-n + 3) {
      border-bottom: unset;
    }

    &:nth-child(3n) {
      border-right: unset;
    }

    &:nth-child(3n + 1) {
      border-left: unset;
    }
  }
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
         <div>
            {renderStatus()}
            <Button onClick={handleResetClick} />
         </div>
      </div>
   );
}
