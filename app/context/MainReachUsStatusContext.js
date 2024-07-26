import React, { useState, createContext } from "react";

export const MainReachUsStatusContext = createContext();

const MainReachUsStatusProvider = ({ children }) => {
    const [reachUs, setReachUs] = useState()

    const handleReachUsOpenModel = (status) => {
      setReachUs(status)
      }

  return (
    <MainReachUsStatusContext.Provider value={{ reachUs, handleReachUsOpenModel }}>
      {children}
    </MainReachUsStatusContext.Provider>
  );
};

export default MainReachUsStatusProvider;
