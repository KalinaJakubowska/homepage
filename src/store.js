import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "./githubSlice";
import themeReducer from "./themeSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    github: githubReducer,
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

store.subscribe(() => {
  localStorage.setItem("isDarkTheme", store.getState().theme.isDarkTheme);
});

export default store;
