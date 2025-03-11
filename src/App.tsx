
import ContextCounterComp from "./components/context-counter.component";
import ErrorBoundary from "./components/error-boundary.component";
import RecoilCounter from "./components/recoil-counter.component";
import ReduxCounter from "./components/redux-counter.component";
import ReduxUser from "./components/redux-user.component";
import RecoilUser from "./components/recoil-user.component";
import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <div className="space-y-12">
        {/* Counter examples */}
        <ContextCounterComp />
        <RecoilCounter />
        <ReduxCounter />

        {/* User Dashboard examples */}
        <RecoilUser />
        <ReduxUser />
      </div>
    </ErrorBoundary>
  );
}

export default App;
