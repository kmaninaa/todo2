import { TimerContextStore } from "./timerCreateContext";
import { useState } from "react";

export const TimerStoreProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [timer, setTimer] = useState();

  const getTask = [];

  return (
    <TimerContextStore.Provider value={{ getTask }}>
      {children}
    </TimerContextStore.Provider>
  );
};
