import React from "react";
import { createRoot } from "react-dom/client";
import "../../index.css";
import App from "../../App.jsx";
import { StoreProvider } from "../../helpers/context/contextStoreProvider.jsx";
import { TimerStoreProvider } from "../../helpers/contextTimer/timerContextStoreProvider.jsx";
import { ButtonsStoreProvider } from "../../helpers/contextButtons/contextButtonsStoreProvider.jsx";

let rootElement = document.getElementById("root");

if (!rootElement) {
  rootElement = document.createElement("div");
  rootElement.id = "root";
  document.body.appendChild(rootElement);
}

createRoot(rootElement).render(
  <>
    <StoreProvider>
      <ButtonsStoreProvider>
        <TimerStoreProvider>
          <App />
        </TimerStoreProvider>
      </ButtonsStoreProvider>
    </StoreProvider>
  </>
);
