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
        {/* Counter examples */}
        {/* <ContextCounterComp />
        <RecoilCounter />
        <ReduxCounter /> */}

        {/* User Dashboard examples */}
        {/* <RecoilUser />
        <ReduxUser /> */}

        {/* Auth examples */}
        <RecoilLogin />
        {/* <ReduxLogin />
        <Profile /> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
