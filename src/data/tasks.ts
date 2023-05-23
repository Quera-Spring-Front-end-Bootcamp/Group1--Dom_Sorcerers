type tasksType = {
  taskName: string;
  taskCategory: string;
  taskCategoryColor: string;
  taskTitle: string;
  taskDeadline: string;
  taskImage: string;
  taskTag: string[];
}[];

const tasks: tasksType = [
  {
    taskName: "پروژه اول",
    taskCategory: "Open",
    taskCategoryColor: "#F98F2E",
    taskTitle: "این یک تیتر برای این تسک است.",
    taskDeadline: "۵ مهر",
    taskImage: "",
    taskTag: ["پروژه"],
  },
  {
    taskName: "پروژه اول",
    taskCategory: "In Progress",
    taskCategoryColor: "#2E7FF9",
    taskTitle: "این یک تیتر برای این تسک است.",
    taskDeadline: "۵ مهر",
    taskImage: "",
    taskTag: ["پروژه", "درس"],
  },
  {
    taskName: "پروژه اول",
    taskCategory: "Pending",
    taskCategoryColor: "#DEC908",
    taskTitle: "این یک تیتر برای این تسک است.",
    taskDeadline: "۵ مهر",
    taskImage: "",
    taskTag: ["پروژه"],
  },
  {
    taskName: "پروژه اول",
    taskCategory: "Todo",
    taskCategoryColor: "#F98F2E",
    taskTitle: "این یک تیتر برای این تسک است.",
    taskDeadline: "۵ مهر",
    taskImage: "",
    taskTag: ["پروژه"],
  },
];

export default tasks;
