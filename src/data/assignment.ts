// fake data for sidebar workspace list

export type AssigenmentIner = {
  id: number;
  color: string;
  title: string;
}[];
const Assigenment: AssigenmentIner = [
  { id: 1, color: "#71FDA9", title: "درس مدیریت پروژه" },
  { id: 2, color: "#DE88FD", title: "کارهای شخصی" },
  { id: 3, color: "transparent", title: "پروژه اول" },
  { id: 4, color: "transparent", title: "پروژه دوم" },
  { id: 5, color: "#FC0733", title: "درس کامپایلر" },
  { id: 6, color: "#92FF07", title: "طراحی الگوریتم" },
];

export { Assigenment };
