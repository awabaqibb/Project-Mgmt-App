import noProjectImage from "../assets/no-projects.png";
import { Button } from "../listing";
import React from "react";

const NoProjects = ({ onStart }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img src={noProjectImage} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="p-3 font-semibold">No Project Selected</h2>
      <Button onClick={onStart}>Create New Project</Button>
    </div>
  );
};

export default NoProjects;
