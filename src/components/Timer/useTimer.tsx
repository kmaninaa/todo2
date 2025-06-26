import { useContext, useCallback, useEffect } from 'react';
import { TimerContextStore } from '../../helpers/contextTimer/timerCreateContext';

export const useTimer = (taskId: number, initialMin: number, initialSec: number, onComplete?: () => void) => {
  const context = useContext(TimerContextStore);
  
  if (!context) {
    throw new Error('useTimer must be used within a TimerStoreProvider');
  }

  const { 
    timers, 
    startTimer, 
    pauseTimer, 
    stopTimer, 
    updateTimer,
    addTimer,
    removeTimer
  } = context;

  const timer = timers.find(t => t.id === taskId) || { 
    id: taskId, 
    isRunning: false, 
    timeLeft: { min: initialMin, sec: initialSec } 
  };

  const initTimer = useCallback(() => {
    addTimer(taskId, initialMin, initialSec);
    return () => removeTimer(taskId);
  }, [taskId, initialMin, initialSec, addTimer, removeTimer]);

  const start = useCallback(() => startTimer(taskId), [taskId, startTimer]);
  const pause = useCallback(() => pauseTimer(taskId), [taskId, pauseTimer]);
  const stop = useCallback(() => {
    stopTimer(taskId);
  }, [taskId, stopTimer]);
  const setTime = useCallback((min: number, sec: number) => {
    updateTimer(taskId, min, sec);
  }, [taskId, updateTimer]);

  return {
    timer,
    initTimer,
    controls: {
      start,
      pause,
      stop,
      setTime
    }
  };
};