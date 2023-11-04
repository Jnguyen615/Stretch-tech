import reportWebVitals from "./reportWebVitals";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import wordReducer from "./reducers/word";
import incrementReducer from "./reducers/Increment";
import App from "./components/App/App";
import activeWordReducer from "./reducers/activeWord";

const store = configureStore({
  reducer: {
    word: wordReducer,
    increment: incrementReducer,
    activeWord: activeWordReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
