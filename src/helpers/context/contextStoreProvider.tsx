import React, { useState, ReactNode } from "react";
import { ContexStore } from "./createContext";
import { IContext, ITask } from "./type";

export const StoreProvider = ({ children }) => {
  const [tasks, setTask] = useState<ITask[]>([]);

  function addTask(newTask: ITask) {
    setTask([...tasks, newTask]);
  }

  function deleteTask(id: number) {
    setTask(tasks.filter((task) => task.id !== id));
  }

  function getTasks() {
    return tasks;
  }

  const toggleTask = (id: number) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const editTask = (id: number, newText: string) => {
    setTask(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task)),
    );
  };

  const clearCompleted = () => {
    setTask(tasks.filter((task) => !task.completed));
  };
  const values: IContext = {
    addTask,
    deleteTask,
    getTasks,
    toggleTask,
    editTask,
    clearCompleted,
  };

  return <ContexStore.Provider value={values}>{children}</ContexStore.Provider>;
};
