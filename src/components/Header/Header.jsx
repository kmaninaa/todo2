import NewTaskForm from "../Task/NewTaskForm";
import { useContext } from "react";
import { ContexStore } from "../../helpers/context/createContext";

export default function Header() {
  const { addTask } = useContext(ContexStore);
  return (
    <header className="header">
      <h1>TODOS</h1>
      <NewTaskForm onAddTask={addTask} />
    </header>
  );
}
