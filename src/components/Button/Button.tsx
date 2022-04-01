type Props = {
    onClick: () => void;
};

export const Button = ({ onClick }: Props): JSX.Element => {
    return (
        <button
            type="button"
            onClick={onClick}
        >
            Reset
        </button>
    );
}