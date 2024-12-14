
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for your context
type CountContextType = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
};

// Create the context with a default value (can be null)
const CountContext = createContext<CountContextType | null>(null);

// Custom hook for accessing the context
export const useCount = () => {
    const context = useContext(CountContext);
    if (!context) {
        throw new Error("useCount must be used within a CountProvider");
    }
    return context;
};
