import { useContext, useEffect, useMemo } from "react";
import { TimerContextStore } from "../../helpers/context/contextTimer/timerCreateContext";

export const useTimer = (
  taskId: number,
  initialMin: number,
  initialSec: number,
  onComplete?: () => void
) => {
  const context = useContext(TimerContextStore);

  if (!context) {
    throw new Error("useTimer must be used within a TimerStoreProvider");
  }

  const {
    timers,
    startTimer,
    pauseTimer,
    stopTimer,
    updateTimer,
    addTimer,
    removeTimer,
  } = context;

  const timer = timers.find((t) => t.id === taskId);

  useEffect(() => {
    if (!timer) {
      addTimer(taskId, initialMin, initialSec, onComplete);
    } else if (onComplete && !timer.onComplete) {
      addTimer(taskId, timer.timeLeft.min, timer.timeLeft.sec, onComplete);
    }
    return () => {
    };
  }, [taskId, initialMin, initialSec, onComplete]);

  const controls = useMemo(
    () => ({
      start: () => startTimer(taskId),
      pause: () => pauseTimer(taskId),
      stop: () => {
        stopTimer(taskId);
        onComplete?.();
      },
      setTime: (min: number, sec: number) => updateTimer(taskId, min, sec),
    }),
    [taskId, startTimer, pauseTimer, stopTimer, updateTimer, onComplete]
  );

  return {
    timer: timer || {
      id: taskId,
      isRunning: false,
      timeLeft: { min: initialMin, sec: initialSec },
    },
    controls,
  };
};
