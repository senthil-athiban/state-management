import React from "react";
import ContextCounterComp from "./components/context-counter.component";
import ErrorBoundary from "./components/error-boundary.component";
import RecoilCounter from "./components/recoil-counter.component";
import ReduxCounter from "./components/redux-counter.component";
import ReduxUser from "./components/redux-user.component";
import RecoilUser from "./components/recoil-user.component";
import Profile from "./components/profile.component";
import RecoilLogin from "./components/recoil-login.component";
import ReduxLogin from "./components/redux-login.component";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="space-y-12">
        {/* Recoil examples */}
        <RecoilCounter />
        <RecoilUser />
        <RecoilLogin />

        {/* ContextAPI examples */}
        <ContextCounterComp />

        {/* Redux examples */}
          <ReduxCounter />
          <ReduxUser />
          <ReduxLogin />
          <Profile />
      </div>
    </ErrorBoundary>
  );
}

export default App;
