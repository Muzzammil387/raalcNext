import React, { useState, createContext } from "react";
import { getLanguage } from "../utils/common";

export const MainLanguageValueContext = createContext();

const MainLanguageValueProvider = ({ children }) => {
    const [langValue, setLangValue] = useState(getLanguage() || 'en')

    const handleLanguage = (status) => {
        setLangValue(status)
      }

  return (
    <MainLanguageValueContext.Provider value={{ langValue, handleLanguage }}>
      {children}
    </MainLanguageValueContext.Provider>
  );
};

export default MainLanguageValueProvider;
