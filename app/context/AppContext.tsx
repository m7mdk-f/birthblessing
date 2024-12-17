"use client"
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface AppContextType {
    getItem: (key: string) => any; // Function to get an item by key
    setItem: (key: string, value: any) => void; // Function to set an item by key
    removeItem: (key: string) => void;
    activeCart: (item: boolean) => void;
    stateCart: () => boolean;
    // Function to remove an item by key
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
    const [data, setData] = useState<{ [key: string]: any }>({});
    const [showCard, setShowCard] = useState(true)


    useEffect(() => {
        if (typeof window !== "undefined") {
            const keys = Object.keys(localStorage);
            const initialData: { [key: string]: any } = {};
            keys.forEach((key) => {
                const value = localStorage.getItem(key);
                if (value) initialData[key] = JSON.parse(value);
            });
            setData(initialData);
        }
    }, []);


    const activeCart = (item: boolean) => {
        setShowCard(item);
    };

    const stateCart = () => {
        return showCard; // This is fine to use as it's called during render, not immediately after setShowCard
    };


    const getItem = (key: string) => {
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem(key);
            try {
                return storedValue ? JSON.parse(storedValue) : [];
            } catch (error) {
                console.error(`Invalid JSON for key: ${key}`, error);
                return [];
            }
        }
        return [];
    };


    const setItem = (key: string, value: any) => {
        setData((prevData) => {
            const updatedData = { ...prevData, [key]: value };
            localStorage.setItem(key, JSON.stringify(value));
            return updatedData;
        });
    };

    const removeItem = (key: string) => {
        setData((prevData) => {
            const updatedData = { ...prevData };
            delete updatedData[key];
            localStorage.removeItem(key);
            return updatedData;
        });
    };

    return (
        <AppContext.Provider value={{ getItem, setItem, removeItem, activeCart, stateCart }}>
            {children}
        </AppContext.Provider>
    );
};


export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
};
