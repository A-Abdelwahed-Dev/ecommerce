import { createRoot } from "react-dom/client";
import AppRouter from "@routes/AppRouter";
//redux
import { Provider } from "react-redux";
import { store, presistor } from "@store/index";
import { PersistGate } from "redux-persist/integration/react";

import "./services/axios-glopal"
//styles
import "bootstrap/dist/css/bootstrap.css";
import "@styles/global.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={presistor} loading={null}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
