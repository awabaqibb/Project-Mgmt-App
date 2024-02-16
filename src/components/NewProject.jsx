import React, { useState } from "react";
import { Input, Button, Modal } from "../listing";

const initState = {
  title: "",
  description: "",
  dueDate: "",
};

const NewProject = ({ onAdd, onCancel }) => {
  const [newProject, setNewProject] = useState(initState);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const getInputValues = (e) => {
    const { name, value } = e.target;
    setNewProject((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmptyState = Object.values(newProject).some(
      (value) => value === ""
    );

    isEmptyState ? openModal() : onAdd(newProject);
  };

  return (
    <>
      {isModalOpen && (
        <Modal>
          <h2>Please fill all fields</h2>
          <button onClick={closeModal}>Close</button>
        </Modal>
      )}
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center gap-4">
          <li>
            <Button className="font-semibold" onClick={onCancel}>
              Cancel
            </Button>
          </li>
          <li>
            <Button
              className="font-semibold"
              onClick={() => setNewProject(initState)}
            >
              🚮
            </Button>
          </li>
          <li>
            <Button
              className="bg-stone-800 px-6 py-2 rounded-md text-stone-50  hover:bg-stone-950"
              onClick={handleSubmit}
            >
              Save
            </Button>
          </li>
        </menu>
        <form onSubmit={handleSubmit}>
          <Input
            label="Title"
            onChange={getInputValues}
            value={newProject.title}
            name="title"
          />
          <Input
            label="Description"
            textarea
            onChange={getInputValues}
            value={newProject.description}
            name="description"
          />
          <Input
            label="Due Date"
            type="date"
            onChange={getInputValues}
            value={newProject.dueDate}
            name="dueDate"
          />
        </form>
      </div>
    </>
  );
};

export default NewProject;
