import React, { useState } from "react";
import { ContextButtonsStore } from "./createContextButton";
import { FilterType, IContext } from "./type";

export const ButtonsStoreProvider = ({ children }) => {
  const [filter, setFilter] = useState<FilterType>("all");

  const values: IContext = {
    filter,
    setFilter,
  };

  return (
    <ContextButtonsStore.Provider value={values}>
      {children}
    </ContextButtonsStore.Provider>
  );
};
