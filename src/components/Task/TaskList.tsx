import React from "react";
import { useContext } from "react";
import Task from "./Task";
import { ContexStore } from "../../utils/helpers/context/contextMain/createContext";
import Footer from "../Footer/Footer";
import { ContextButtonsStore } from "../../utils/helpers/context/contextButtons/createContextButton";

export default function TaskList() {
  const {
    addTask,
    getTasks,
    toggleTask,
    deleteTask,
    editTask,
    clearCompleted,
  } = useContext(ContexStore);
  const { filter, setFilter } = useContext(ContextButtonsStore);

  const tasks = getTasks();

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <>
      <section className="main">
        <ul className="todo-list">
          {filteredTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
              onEdit={editTask}
            />
          ))}
        </ul>
        <Footer
          filter={filter}
          setFilter={setFilter}
          activeTasksCount={tasks.filter((t) => !t.completed).length}
          clearCompleted={clearCompleted}
        />
      </section>
    </>
  );
}
