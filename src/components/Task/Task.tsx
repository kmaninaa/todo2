// components/Task/Task.tsx
import React from "react";
import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { useContext } from "react";
import { TimerContextStore } from "../../helpers/contextTimer/timerCreateContext";

export default function Task({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const {
    activeTaskId,
    timeLeft,
    startTimer,
    pauseTimer,
    resetTimer,
    isRunning,
    setTaskTimer,
  } = useContext(TimerContextStore);

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim()) {
        onEdit(task.id, editText.trim());
      }
    } else {
      setEditText(task.text);
    }
    setIsEditing(!isEditing);
  };

  const handleTimerClick = () => {
    if (activeTaskId === task.id) {
      if (isRunning) {
        pauseTimer();
      } else {
        startTimer();
      }
    } else {
      setTaskTimer(task.id, Number(task.min), Number(task.sec));
    }
  };

  const formatTime = (min: number, sec: number) => {
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <li
      className={`${task.completed ? "completed" : ""} ${isEditing ? "editing" : ""}`}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <label>
          <span className="description">{task.text}</span>
          <span className="created">
            created{" "}
            {formatDistanceToNow(task.createdAt, {
              addSuffix: true,
              includeSeconds: true,
            })}
          </span>
          <span className="timer">
            {activeTaskId === task.id
              ? formatTime(timeLeft.min, timeLeft.sec)
              : formatTime(Number(task.min), Number(task.sec))}
          </span>
        </label>
        <button
          className={`icon icon-play ${activeTaskId === task.id && isRunning ? "active" : ""}`}
          onClick={handleTimerClick}
        />
        <button className="icon icon-edit" onClick={handleEdit} />
        <button
          className="icon icon-destroy"
          onClick={() => onDelete(task.id)}
        />
      </div>
      {isEditing && (
        <input
          className="edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
        />
      )}
    </li>
  );
}
