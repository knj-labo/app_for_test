import { Board} from "@/components/Board/Board";
import { useBoard } from '@/components/Board/useBoard';

export const Game = () => {
    const initialValues = Array(9).fill(null);
    const initialPlayer = 'O';
    const initialWinner = '';
    const props = useBoard({initialValues, initialPlayer, initialWinner});
    return <Board  {...props}/>;
}