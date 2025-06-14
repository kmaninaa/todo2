import { createRoot } from "react-dom/client";
import "../../index.css";
import App from "../../App.jsx";
import { StoreProvider } from "../../helpers/context/contextStoreProvider.jsx";
import { TimerStoreProvider } from "../../helpers/contextTimer/timerContextStoreProvider.jsx";
import { ButtonsStoreProvider } from "../../helpers/contextButtons/contextButtonsStoreProvider.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <StoreProvider>
      <TimerStoreProvider>
        <ButtonsStoreProvider>
          <App />
        </ButtonsStoreProvider>
      </TimerStoreProvider>
    </StoreProvider>
  </>
);
