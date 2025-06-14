import Header from "./components/Header/Header";
import NewTaskForm from "./components/Task/NewTaskForm";
import TaskList from "./components/Task/TaskList";

function App() {
  return (
    <section className="todoapp">
      <Header />
      <TaskList />
    </section>
  );
}

export default App;
