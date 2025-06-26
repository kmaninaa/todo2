import React from "react";
import Header from "./components/Header/Header";
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
