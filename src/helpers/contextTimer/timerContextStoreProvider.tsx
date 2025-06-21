// helpers/contextTimer/timerStoreProvider.tsx
import React, { useState, useEffect } from "react";
import { TimerContextStore } from "./timerCreateContext";
import { ITimerContextType } from "./type";

export const TimerStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeTaskId, setActiveTaskId] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({ min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const [initialTime, setInitialTime] = useState({ min: 0, sec: 0 });

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev.min === 0 && prev.sec === 0) {
            clearInterval(interval as NodeJS.Timeout);
            setIsRunning(false);
            return { min: 0, sec: 0 };
          }

          if (prev.sec === 0) {
            return { min: prev.min - 1, sec: 59 };
          }

          return { ...prev, sec: prev.sec - 1 };
        });
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const stopTimer = () => {
    setIsRunning(false);
    setActiveTaskId(null);
    setTimeLeft({ min: 0, sec: 0 });
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  const setTaskTimer = (taskId: number, min: number, sec: number) => {
    setActiveTaskId(taskId);
    setTimeLeft({ min, sec });
    setInitialTime({ min, sec });
  };

  const values: ITimerContextType = {
    activeTaskId,
    setActiveTaskId,
    timeLeft,
    setTimeLeft,
    startTimer,
    pauseTimer,
    stopTimer,
    resetTimer,
    isRunning,
    setTaskTimer,
  };

  return (
    <TimerContextStore.Provider value={values}>
      {children}
    </TimerContextStore.Provider>
  );
};
