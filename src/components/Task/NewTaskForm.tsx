import React from "react";
import { useState } from "react";
import "./index.css";
import { useContext } from "react";
import { ContexStore } from "../../helpers/context/createContext";
import { IFormData } from "./type";
import { useForm } from "react-hook-form";

export default function NewTaskForm() {
  const { addTask } = useContext(ContexStore);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit = (data: IFormData) => {
    const newTask = {
      id: Date.now(),
      text: data.text,
      min: data.min || 0,
      sec: data.sec || 0,
      completed: false,
      createdAt: new Date(),
    };
    addTask(newTask);
    reset();
  };

  return (
    <>
      <form className="new-todo-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          {...register("text", { required: "Task text is required" })}
          autoFocus
        />
        {errors.text && <p className="error">{errors.text.message}</p>}
        <input
          className="new-todo"
          type="number"
          placeholder="Min (optional)"
          {...register("min", {
            valueAsNumber: true,
            min: { value: 0, message: "Min cannot be negative" },
          })}
        />
        {errors.min && <p className="error">{errors.min.message}</p>}
        <input
          className="new-todo"
          type="number"
          placeholder="Sec (optional)"
          {...register("sec", {
            valueAsNumber: true,
            min: { value: 0, message: "Sec cannot be negative" },
            max: { value: 59, message: "Sec must be less than 60" },
          })}
        />
        {errors.sec && <p className="error">{errors.sec.message}</p>}
        <button type="submit"></button>
      </form>
    </>
  );
}
