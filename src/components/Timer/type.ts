export interface ITimer {
    id: number;
    isRunning: boolean;
    timeLeft: { min: number; sec: number };
  }