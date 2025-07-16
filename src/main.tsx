import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/global.css";
import App from "./app/App";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={1000}
      preventDuplicate
    >
      <App />
    </SnackbarProvider>
  </StrictMode>
);
