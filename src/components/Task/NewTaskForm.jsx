import { useState } from "react";

export default function NewTaskForm({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTask(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <form className="new-todo-form" onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus
        />
        {/* <input className="new-todo" type="text" placeholder="Min" />
        <input className="new-todo" type="text" placeholder="Sec" /> */}
      </form>
    </>
  );
}
