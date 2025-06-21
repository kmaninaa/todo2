import React from "react";
import NewTaskForm from "../Task/NewTaskForm";

export default function Header() {
  return (
    <header className="header">
      <h1>TODOS</h1>
      <NewTaskForm />
    </header>
  );
}
