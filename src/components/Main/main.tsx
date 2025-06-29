import React from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";
import App from "../../App.jsx";
import { StoreProvider } from "../../utils/helpers/context/contextMain/contextStoreProvider.js";
import { TimerStoreProvider } from "../../utils/helpers/contextTimer/timerContextStoreProvider.js";
import { ButtonsStoreProvider } from "../../utils/helpers/context/contextButtons/contextButtonsStoreProvider.js";

let rootElement = document.getElementById("root");

if (!rootElement) {
  rootElement = document.createElement("div");
  rootElement.id = "root";
  document.body.appendChild(rootElement);
}

createRoot(rootElement).render(
  <>
    <TimerStoreProvider>
      <StoreProvider>
        <ButtonsStoreProvider>
          <App />
        </ButtonsStoreProvider>
      </StoreProvider>
    </TimerStoreProvider>
  </>
);
