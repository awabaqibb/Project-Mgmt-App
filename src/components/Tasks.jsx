import React from "react";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onClearTask }) => {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAddTask={onAddTask} />

        {tasks.length === 0 && (
          <p className="text-stone-800 my-4">
            This project does not have any tasks yet
          </p>
        )}

        {tasks.length > 0 && (
          <ul className="p-4 mt-8 bg-stone-100">
            {tasks.map((item) => (
              <li className="flex justify-between py-2" key={item.taskId}>
                <span>{item.desc}</span>
                <button
                  onClick={() => onClearTask(item.taskId)}
                  className="text-stone-700 hover:text-red-700"
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Tasks;
