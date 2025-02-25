import React from "react";
import { RecoilRoot } from "recoil";
import "./App.css";
import CharacterCounter from "./CharacterCounter";
import ContextCounterComp from "./components/context-counter.component";
import CounterProvider from "./context/counter.context";

function App() {
  return (
    // <RecoilRoot>
    //   <CharacterCounter />
    // </RecoilRoot>
    <CounterProvider>
      <ContextCounterComp />
    </CounterProvider>
  );
}

export default App;
