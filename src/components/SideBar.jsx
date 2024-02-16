import React from "react";
import { Button } from "../listing";

const SideBar = ({ onStart, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStart}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((item) => (
          <li key={item.id} className="font-semibold">
            {item.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
