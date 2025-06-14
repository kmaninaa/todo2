import { useState } from "react";
import { ContexStore } from "./createContext";

export const StoreProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTask([...tasks, newTask]);
  }

  function deleteTask(id) {
    setTask(tasks.filter((task) => task.id !== id));
  }

  function getTasks() {
    return tasks;
  }

  const toggleTask = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTask(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  const clearCompleted = () => {
    setTask(tasks.filter((task) => !task.completed));
  };
  const values = {
    addTask,
    deleteTask,
    getTasks,
    toggleTask,
    editTask,
    clearCompleted,
  };

  return <ContexStore.Provider value={values}>{children}</ContexStore.Provider>;
};
