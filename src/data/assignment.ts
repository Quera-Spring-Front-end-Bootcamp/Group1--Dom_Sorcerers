// fake data for sidebar workspace list

// export type AssigenmentType = {
//   id: number;
//   color: string;
//   title: string;
//   hasSub?: boolean;
//   subAss?: {
//     subId: number;
//     subTitle: string;
//   }[];
// }[];
const Assigenment = [
	{
		id: 1,
		color: "#71FDA9",
		title: "درس مدیریت پروژه",
		hasSub: true,
		subAss: [
			{ subId: 1000, subTitle: "فصل اول" },
			{ subId: 1001, subTitle: "فصل دوم" },
		],
	},
	{
		id: 2,
		color: "#DE88FD",
		title: "کارهای شخصی",
		hasSub: true,
		subAss: [
			{ subId: 2000, subTitle: "پروژه اول" },
			{ subId: 2001, subTitle: "پروژه دوم" },
		],
	},
	{ id: 3, color: "#FC0733", title: "درس کامپایلر" },
	{ id: 4, color: "#92FF07", title: "طراحی الگوریتم" },
	{ id: 5, color: "#71FDA9", title: "اسپیس دیگه" },
	{ id: 6, color: "#DE88FD", title: "اسپیس جدید" },
	{ id: 7, color: "#92FF07", title: "اسپیس امتحانی" },
];

export { Assigenment };
