import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { persistor, store } from './redux-store/index.ts';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App.tsx'
import { Provider } from 'react-redux';
import { RecoilRoot } from "recoil";
import './index.css'
import CounterProvider from './context/counter.context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CounterProvider>
    <RecoilRoot>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </RecoilRoot>
    </CounterProvider>
  </StrictMode>,
)

