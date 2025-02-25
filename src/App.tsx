import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import CharacterCounter from "./CharacterCounter";
import ContextCounterComp from "./components/context-counter.component";
import CounterProvider from "./context/counter.context";
import ErrorBoundary from "./components/error-boundary.component";

function App() {
  return (
    // <RecoilRoot>
    //   <CharacterCounter />
    // </RecoilRoot>
    <ErrorBoundary>
    <CounterProvider>
      <ContextCounterComp />
    </CounterProvider>
    </ErrorBoundary>
  );
}

export default App;
