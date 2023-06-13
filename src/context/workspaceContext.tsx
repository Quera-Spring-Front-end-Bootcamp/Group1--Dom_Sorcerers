import { createContext, useContext, useState, useEffect } from "react";
import workSpaceApi from "../api/workSpace";

type WorkspaceContextType = {
  workSpace: workSpaceType;
  workSpaceId: string;
  projectId: string;
  setAllWorkSpace: (w: workSpaceType) => void;
  setCurrentWorkspaceId: (id: string) => void;
  setCurrentProjectId: (id: string) => void;
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
  projectId: "",
  setAllWorkSpace: () => {},
  setCurrentWorkspaceId: () => {},
  setCurrentProjectId: () => {},
});

export const WorkspaceProvider = ({ children }: Props) => {
  const [workSpace, setWorkSpace] = useState<workSpaceType>([
    {
      _id: "",
      name: "",
      user: "",
      members: [],
      projects: [],
    },
  ]);
  const [workSpaceId, setWorkSpaceId] = useState("");
  const [projectId, setProjectId] = useState("");

  const fetchWorkspaces = async () => {
    const response = await workSpaceApi.getAllWorkSpace();
    setWorkSpace(JSON.parse(JSON.stringify(response.data.data)));
    console.log(response.data.data);
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  const setAllWorkSpace = (w: workSpaceType) => {
    console.log("in context:");
    console.log(w);
    setWorkSpace(w);
  };
  const setCurrentWorkspaceId = (id: string) => {
    setWorkSpaceId(id);
  };
  const setCurrentProjectId = (id: string) => {
    setProjectId(id);
  };
  console.log("in context state:");
  console.log(workSpace);
  console.log(workSpaceId);
  return (
    <WorkspaceContext.Provider
      value={{
        workSpace,
        workSpaceId,
        projectId,
        setAllWorkSpace,
        setCurrentWorkspaceId,
        setCurrentProjectId,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};

export const useWorkspace = () => {
  return useContext(WorkspaceContext);
};
