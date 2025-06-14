import { useState } from "react";
import { ContextButtonsStore } from "./createContextButton";

export const ButtonsStoreProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");

  const values = {
    filter,
    setFilter,
  };

  return (
    <ContextButtonsStore.Provider value={values}>
      {children}
    </ContextButtonsStore.Provider>
  );
};
