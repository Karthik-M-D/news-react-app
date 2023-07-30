// NewsContext.js
import { createContext, useContext, useState } from 'react';

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
    const [currNews, setCurrNews] = useState({});

    return (
        <NewsContext.Provider value={{ currNews, setCurrNews }}>
            {children}
        </NewsContext.Provider>
    );
};

export const useNewsContext = () => useContext(NewsContext);
