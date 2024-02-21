import React, { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [desc, setDesc] = useState("");

  const handleChange = (e) => {
    console.log(desc);
    setDesc(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleChange}
        value={desc}
        name="desc"
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button
        onClick={() => onAddTask(desc)}
        className="px-2 text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
