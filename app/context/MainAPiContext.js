import React, { useState, createContext } from "react";

export const MainAPiContext = createContext();

const MainAPiProvider = ({ children }) => {
    const [mainData, setMainData] = useState()

    const handleOpenModels = (status) => {
        setMainData(status)
      }

  return (
    <MainAPiContext.Provider value={{ mainData, handleOpenModels }}>
      {children}
    </MainAPiContext.Provider>
  );
};

export default MainAPiProvider;
