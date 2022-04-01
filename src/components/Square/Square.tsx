type Props = {
   index: number;
   marker: 'O' | 'X';
   onClick: (index: number) => void;
};

export function Square({ onClick, marker, index }: Props): JSX.Element {
   return (
      <div role="button" tabIndex={0} key={index} onClick={() => onClick(index)} onKeyPress={() => onClick(index)}>
         {marker}
      </div>
   );
}
