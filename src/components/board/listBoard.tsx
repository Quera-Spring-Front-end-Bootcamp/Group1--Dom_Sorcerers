import { useState } from "react";

useState;
const ListBoard = () => {
  const [tasks, setTasks] = useState([
    {
      taskCategory: "",
      taskCategoryColor: "",
      taskTitle: "",
      taskContent: "",
      taskImage: "",
      taskTag: "",
    },
  ]);

  return <div>list board</div>;
};

export default ListBoard;
