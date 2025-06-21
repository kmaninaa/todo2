import { createContext } from "react";

export interface ITimerContextType {
  activeTaskId: number | null;
  setActiveTaskId: (id: number | null) => void;
  timeLeft: { min: number; sec: number };
  setTimeLeft: (time: { min: number; sec: number }) => void;
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  stopTimer: () => void;
  setTaskTimer: (taskId: number, min: number, sec: number) => void;
  isRunning: boolean;
}

export const TimerContextStore = createContext({} as ITimerContextType);
