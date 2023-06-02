interface Props {
	color?: string;
}
export const PlusIconDataCell = ({ color = "#1E1E1E" }: Props) => {
	return (
		<svg
			width="15"
			height="15"
			viewBox="0 0 19 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M15.5 17H3.5C2.395 17 1.5 16.105 1.5 15V3C1.5 1.895 2.395 1 3.5 1H15.5C16.605 1 17.5 1.895 17.5 3V15C17.5 16.105 16.605 17 15.5 17Z"
				stroke={color ? color : "#1E1E1E"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.5 5V13"
				stroke={color ? color : "#1E1E1E"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.5 9H5.5"
				stroke={color ? color : "#1E1E1E"}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
