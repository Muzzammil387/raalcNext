import React, { useState, createContext } from "react";
import { getLanguage } from "../utils/common";

export const MainTeamContext = createContext();

const MainTeamProvider = ({ children }) => {
    const [teamss, setTeamss] = useState([])

    const handleTeamss = (team) => {
        setTeamss(team)
      }

  return (
    <MainTeamContext.Provider value={{ teamss, handleTeamss }}>
      {children}
    </MainTeamContext.Provider>
  );
};

export default MainTeamProvider;
