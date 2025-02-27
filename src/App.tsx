import React from "react";
import { RecoilRoot } from "recoil";
import ContextCounterComp from "./components/context-counter.component";
import CounterProvider from "./context/counter.context";
import ErrorBoundary from "./components/error-boundary.component";
import RecoilCounter from "./components/recoil-counter.component";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux-store";
import ReduxCounter from "./components/redux-counter.component";
import ReduxUser from "./components/redux-user.component";
import RecoilUser from "./components/recoil-user.component";

function App() {
  return (
    <ErrorBoundary>
      <div className="space-y-12">
        <RecoilRoot>
          <RecoilCounter />
          <RecoilUser />
        </RecoilRoot>
        <CounterProvider>
          <ContextCounterComp />
          
        </CounterProvider>
        <Provider store={store}>
          <ReduxCounter />
          <ReduxUser />
        </Provider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
