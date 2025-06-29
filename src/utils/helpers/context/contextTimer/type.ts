import { ITimer } from "../../../hooks/Timer/type";

export interface ITimerContextType {
  timers: ITimer[];
  startTimer: (id: number) => void;
  pauseTimer: (id: number) => void;
  stopTimer: (id: number) => void;
  updateTimer: (id: number, min: number, sec: number) => void;
  addTimer: (
    id: number,
    min: number,
    sec: number,
    onComplete?: () => void
  ) => void;
  removeTimer: (id: number) => void;
}
