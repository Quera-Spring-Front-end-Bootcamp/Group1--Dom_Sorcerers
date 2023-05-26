interface Props {
	onCLick?: () => void;
	color?: string;
}
export const CLoseIcon = ({ onCLick, color }: Props) => {
	return (
		<svg
			onClick={onCLick}
			width="10"
			height="11"
			viewBox="0 0 10 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 1.5L9 9.5"
				stroke={color ? color : "#323232"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 1.5L1 9.5"
				stroke={color ? color : "#323232"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
