import React, { useState, useCallback } from "react";
import { formatDistanceToNow } from "date-fns";
import { useTimer } from "../../utils/hooks/Timer/useTimer";

export default function Task({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleComplete = useCallback(() => {
    if (!task.completed) {
      onToggle(task.id);
    }
  }, [task.id, task.completed, onToggle]);

  const { timer, controls } = useTimer(
    task.id,
    Number(task.min),
    Number(task.sec),
    handleComplete
  );

  const handleToggle = () => {
    const newCompletedState = !task.completed;
    onToggle(task.id);

    if (newCompletedState) {
      controls.stop();
    }
  };

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
    if (timer.isRunning) {
      controls.pause();
    } else {
      controls.start();
    }
  };

  const handleStop = () => {
    controls.pause();
    if (!task.completed) {
      onToggle(task.id);
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
          onChange={handleToggle}
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
            {formatTime(timer.timeLeft.min, timer.timeLeft.sec)}
          </span>
        </label>
        <div className="timer-controls">
          <button
            className={`icon ${timer.isRunning ? "icon-pause" : "icon-play"}`}
            onClick={handleTimerClick}
            title={timer.isRunning ? "Pause" : "Start"}
          />
          <button
            className="icon icon-stop"
            onClick={handleStop}
            title="Stop"
          />
          <button
            className="icon icon-edit"
            onClick={handleEdit}
            title="Edit"
          />
          <button
            className="icon icon-destroy"
            onClick={() => onDelete(task.id)}
            title="Delete"
          />
        </div>
      </div>
      {isEditing && (
        <input
          className="edit"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEdit()}
          autoFocus
        />
      )}
    </li>
  );
}
