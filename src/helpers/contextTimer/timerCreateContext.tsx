import { createContext } from "react";
import { ITimerContextType } from "./type";

export const TimerContextStore = createContext({} as ITimerContextType);
