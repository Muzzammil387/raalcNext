import React, { useState, createContext } from "react";

export const MainBookingStatusContext = createContext();

const MainBookingStatusProvider = ({ children }) => {
    const [bookingModel, setBookingModel] = useState()
    const [teamnam, setTeamnam] = useState()

    const handleOpenModel = (status,teamName) => {
      if(status) {
        document.getElementsByTagName( 'html' )[0].classList.add("fixedd")
      }
      else {
        document.getElementsByTagName( 'html' )[0].classList.remove("fixedd")

      }
      setTeamnam(teamName)
        setBookingModel(status)
      }

  return (
    <MainBookingStatusContext.Provider value={{ bookingModel,teamnam, handleOpenModel }}>
      {children}
    </MainBookingStatusContext.Provider>
  );
};

export default MainBookingStatusProvider;
