import React from "react";
import { RecoilRoot } from "recoil";
import ContextCounterComp from "./components/context-counter.component";
import CounterProvider from "./context/counter.context";
import ErrorBoundary from "./components/error-boundary.component";
import RecoilCounter from "./components/recoil-counter.component";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="space-y-12">
        <RecoilRoot>
          <RecoilCounter />
        </RecoilRoot>
        <CounterProvider>
          <ContextCounterComp />
        </CounterProvider>
      </div>
    </ErrorBoundary>
  );
}

export default App;
