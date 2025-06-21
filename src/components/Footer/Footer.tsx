import  React  from "react";
import TaskFilter from "./TasksFilter";



export default function Footer({
  filter,
  setFilter,
  activeTasksCount,
  clearCompleted,
}) {

  return (
    <footer className="footer">
      <span className="todo-count">
        {activeTasksCount} {activeTasksCount === 1 ? "item" : "items"}
      </span>
      <ul className="filters">
        <TaskFilter
          selected={filter === "all"}
          onClick={() => {
            setFilter("all");
            console.log(filter);
          }}
        >
          All
        </TaskFilter>
        <TaskFilter
          selected={filter === "active"}
          onClick={() => {
            setFilter("active");
            console.log(filter);
          }}
        >
          Active
        </TaskFilter>
        <TaskFilter
          selected={filter === "completed"}
          onClick={() => {
            setFilter("completed");
            console.log(filter);
          }}
        >
          Completed
        </TaskFilter>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
