import React from "react";
import ContextCounterComp from "./components/context-counter.component";
import ErrorBoundary from "./components/error-boundary.component";
import RecoilCounter from "./components/recoil-counter.component";
import ReduxCounter from "./components/redux-counter.component";
import ReduxUser from "./components/redux-user.component";
import RecoilUser from "./components/recoil-user.component";
import SignIn from "./components/signin.component";
import "./App.css";
import Profile from "./components/profile.component";

function App() {
  return (
    <ErrorBoundary>
      <div className="space-y-12">
        {/* Recoil examples */}
        <RecoilCounter />
        <RecoilUser />

        {/* ContextAPI examples */}
        <ContextCounterComp />

        {/* Redux examples */}
          <ReduxCounter />
          <ReduxUser />
          <SignIn />
          <Profile />
      </div>
    </ErrorBoundary>
  );
}

export default App;
