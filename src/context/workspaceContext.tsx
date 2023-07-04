import { createContext, useContext, useState, useEffect } from "react";
import workSpaceApi from "../api/workSpace";

type WorkspaceContextType = {
  workSpace: workSpaceType | null;
  workSpaceId: string;
  project: projectType | null;
  boards: boardsType | null;
  setAllWorkSpace: (w: workSpaceType | null) => void;
  setCurrentWorkspaceId: (id: string) => void;
  setCurrentProject: (p: projectType | null) => void;
  setCurrentBoards: (b: boardsType | null) => void;
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};
type workSpaceType = {
  _id: string;
  name: string;
  user: string;
  members: object;
  projects: projectType[];
}[];

type projectType = {
  _id: string;
  name: string;
  workspace: string;
  members: [];
  board: [];
};

type boardsType = {
  _id: string;
  name: string;
  position: number;
  project: string;
  tasks: taskType | null;
}[];

type taskType = {
  _id: string;
  name: string;
  description: string;
  label: [];
  board: string;
  taskTags: [];
  taskAssigns: [];
  comments: [];
  position: 1;
}[];

const WorkspaceContext = createContext<WorkspaceContextType>({
  workSpace: [
    {
      _id: "",
      name: "",
      user: "",
      members: [],
      projects: [
        {
          _id: "",
          name: "",
          workspace: "",
          members: [],
          board: [],
        },
      ],
    },
  ],
  workSpaceId: "",
  project: {
    _id: "",
    name: "",
    workspace: "",
    members: [],
    board: [],
  },
  boards: [
    {
      _id: "",
      name: "",
      position: 1,
      project: "",
      tasks: [
        {
          _id: "",
          name: "",
          description: "",
          label: [],
          board: "",
          taskTags: [],
          taskAssigns: [],
          comments: [],
          position: 1,
        },
      ],
    },
  ],
  setAllWorkSpace: () => {},
  setCurrentWorkspaceId: () => {},
  setCurrentProject: () => {},
  setCurrentBoards: () => {},
});

export const WorkspaceProvider = ({ children }: Props) => {
  const [workSpace, setWorkSpace] = useState<workSpaceType | null>([
    {
      _id: "",
      name: "",
      user: "",
      members: [],
      projects: [],
    },
  ]);
  const [workSpaceId, setWorkSpaceId] = useState("");
  const [project, setProject] = useState<projectType | null>({
    _id: "",
    name: "",
    workspace: "",
    members: [],
    board: [],
  });

  const [boards, setBoards] = useState<boardsType | null>([
    {
      _id: "",
      name: "",
      position: 1,
      project: "",
      tasks: [
        {
          _id: "",
          name: "",
          description: "",
          label: [],
          board: "",
          taskTags: [],
          taskAssigns: [],
          comments: [],
          position: 1,
        },
      ],
    },
  ]);

  // const fetchWorkspaces = async () => {
  //   const response = await workSpaceApi.getAllWorkSpace();
  //   setWorkSpace(JSON.parse(JSON.stringify(response.data.data)));
  //   console.log(response.data.data);
  // };

  // useEffect(() => {
  //   fetchWorkspaces();
  // }, []);

  const setAllWorkSpace = (w: workSpaceType | null) => {
    setWorkSpace(w);
  };
  const setCurrentWorkspaceId = (id: string) => {
    setWorkSpaceId(id);
  };
  const setCurrentProject = (data: projectType | null) => {
    setProject(data);
  };

  const setCurrentBoards = (b: boardsType | null) => {
    setBoards(b);
  };

  return (
    <WorkspaceContext.Provider
      value={{
        workSpace,
        workSpaceId,
        project,
        boards,
        setAllWorkSpace,
        setCurrentWorkspaceId,
        setCurrentProject,
        setCurrentBoards,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  return useContext(WorkspaceContext);
};
