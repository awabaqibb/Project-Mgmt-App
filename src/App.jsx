import { useState } from "react";
import { SideBar, NewProject, NoProjects } from "./listing";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [projectState, setProjectState] = useState({
    projectId: undefined,
    projects: [],
  });

  const handleStartProject = () => {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectId: -1,
      };
    });
  };

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: uuidv4(),
    };

    setProjectState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  console.log(projectState);

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStart={handleStartProject} projects={projectState.projects} />
      {projectState.projectId ? (
        <NewProject onStart={handleStartProject} onAdd={handleAddProject} />
      ) : (
        <NoProjects onStart={handleStartProject} />
      )}
    </main>
  );
}

export default App;
