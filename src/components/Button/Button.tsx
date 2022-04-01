type Props = {
   onClick: () => void;
};

export function Button({ onClick }: Props): JSX.Element {
   return (
      <button type="button" onClick={onClick}>
         Reset
      </button>
   );
}
