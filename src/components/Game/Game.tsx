import styled from '@emotion/styled';
import { Board } from '@/components/Board/Board';
import { useBoard } from '@/components/Board/useBoard';

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Game = () => {
   const initialValues = Array(9).fill(null);
   const initialPlayer = 'O';
   const initialWinner = '';
   const props = useBoard({ initialValues, initialPlayer, initialWinner });
   return (
       <Main>
           <Board {...props} />
       </Main>
       )
}
