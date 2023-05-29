type priority = {
  id: number;
  name: string;
  color: string;
}[];

const PriorityList: priority = [
  {
    id: 1,
    name: "فوری",
    color: "#FB0606",
  },
  {
    id: 2,
    name: "بالا",
    color: "#FFE605",
  },
  {
    id: 3,
    name: "متوسط",
    color: "#09DBCE",
  },
  {
    id: 4,
    name: "پایین",
    color: "#B2ACAC",
  },
];

export default PriorityList;
