import TaskFilter from "./TasksFilter";
// import { ContextButtonsStore } from "../../helpers/contextButtons/createContextButton";
// import { useContext } from "react";

export default function Footer({
  filter,
  setFilter,
  activeTasksCount,
  clearCompleted,
}) {
  // const { filter, setFilter } = useContext(ContextButtonsStore);
  // console.log(filter);

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
