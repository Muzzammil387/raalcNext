import React, { useState, createContext } from "react";

export const MainBookingStatusContext = createContext();

const MainBookingStatusProvider = ({ children }) => {
    const [bookingModel, setBookingModel] = useState()

    const handleOpenModel = (status) => {
      if(status) {
        document.getElementsByTagName( 'html' )[0].classList.add("fixedd")
      }
      else {
        document.getElementsByTagName( 'html' )[0].classList.remove("fixedd")

      }
        setBookingModel(status)
      }

  return (
    <MainBookingStatusContext.Provider value={{ bookingModel, handleOpenModel }}>
      {children}
    </MainBookingStatusContext.Provider>
  );
};

export default MainBookingStatusProvider;
