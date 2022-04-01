import {Button} from "@/components/Button/Button";
import {Square} from "@/components/Square/Square";


type Props = {
    winner: string,
    player: string,
    boards: any[],
    handlePlayClick:(index: number) => void,
    handleResetClick: () => void,
    renderStatus: () => JSX.Element
}

export const Board = ({winner, player, boards, handlePlayClick, handleResetClick, renderStatus}: Props):JSX.Element => {
    return (
        <div>
            <div>
                {
                    boards.map((marker, index) => (
                        <Square
                            key={index}
                            index={index}
                            onClick={handlePlayClick}
                            marker={marker}
                        />
                    ))
                }
            </div>
            <div>
                {renderStatus()}
                <Button onClick={handleResetClick}/>
            </div>
        </div>
    );
}