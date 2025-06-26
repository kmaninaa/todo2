import React, { useState, useEffect, useCallback } from 'react';
import { TimerContextStore } from './timerCreateContext';
import { ITimer } from '../../components/Timer/type';

export const TimerStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [timers, setTimers] = useState<ITimer[]>([]);

  const addTimer = useCallback((id: number, min: number, sec: number) => {
    setTimers(prev => [
      ...prev.filter(t => t.id !== id),
      { id, isRunning: false, timeLeft: { min, sec } }
    ]);
  }, []);

  const removeTimer = useCallback((id: number) => {
    setTimers(prev => prev.filter(t => t.id !== id));
  }, []);

  const updateTimer = useCallback((id: number, min: number, sec: number) => {
    setTimers(prev => prev.map(t => 
      t.id === id ? { ...t, timeLeft: { min, sec } } : t
    ));
  }, []);

  const startTimer = useCallback((id: number) => {
    setTimers(prev => prev.map(t => 
      t.id === id ? { ...t, isRunning: true } : t
    ));
  }, []);

  const pauseTimer = useCallback((id: number) => {
    setTimers(prev => prev.map(t => 
      t.id === id ? { ...t, isRunning: false } : t
    ));
  }, []);

  const stopTimer = useCallback((id: number) => {
    setTimers(prev => prev.map(t => 
      t.id === id ? { ...t, isRunning: false, timeLeft: { min: 0, sec: 0 } } : t
    ));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(prev => prev.map(timer => {
        if (!timer.isRunning) return timer;
        
        const { min, sec } = timer.timeLeft;
        
        if (min === 0 && sec === 0) {
          return { ...timer, isRunning: false };
        }

        if (sec === 0) {
          return { ...timer, timeLeft: { min: min - 1, sec: 59 } };
        }

        return { ...timer, timeLeft: { min, sec: sec - 1 } };
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const value = {
    timers,
    startTimer,
    pauseTimer,
    stopTimer,
    updateTimer,
    addTimer,
    removeTimer
  };

  return (
    <TimerContextStore.Provider value={value}>
      {children}
    </TimerContextStore.Provider>
  );
};