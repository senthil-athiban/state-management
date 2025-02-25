import React, { createContext, useContext, useState } from "react";

interface CounterContextType {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>
}
const CounterContext = createContext<CounterContextType | undefined>(undefined);

const CounterProvider = ({children}: {children: React.ReactNode}) => {
    const [count, setCount] = useState(0);
    return (
        <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = (): CounterContextType => {
    const counterContext = useContext(CounterContext);
    if(!counterContext) {
        throw new Error('useCounter must be used inside within the  counter provider');
    }
    return counterContext;
}
export default CounterProvider;