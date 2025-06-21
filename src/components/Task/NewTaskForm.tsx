import  React  from "react";
import { useState } from "react";
import "./index.css";
import { useContext } from "react";
import { ContexStore } from "../../helpers/context/createContext";

export default function NewTaskForm() {
  const [inputMin, setInputMin] = useState<number | string>(0);
  const [inputSec, setInputSec] = useState<number | string>(0);
  const [inputValue, setInputValue] = useState<string>("");

  const { addTask } = useContext(ContexStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      text: inputValue,
      min: inputMin,
      sec: inputSec,
      completed: false,
      createdAt: new Date(),
    };
    console.log(e);
    addTask(newTask);
    setInputValue("");
  };

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputMin = (e) => {
    setInputMin(e.target.value);
  };

  const handleInputSec = (e) => {
    setInputSec(e.target.value);
  };

  return (
    <>
      <form className="new-todo-form" onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={inputValue}
          onChange={handleInputValue}
          autoFocus
        />
        <input
          className="new-todo"
          type="number"
          placeholder="Min"
          value={inputMin}
          onChange={handleInputMin}
        />
        <input
          className="new-todo"
          type="number"
          placeholder="Sec"
          value={inputSec}
          onChange={handleInputSec}
        />
        <button type="submit"></button>
      </form>
    </>
  );
}
