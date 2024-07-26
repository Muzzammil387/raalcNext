import React, { useState, createContext } from "react";

export const MainBookingStatusContext = createContext();

const MainBookingStatusProvider = ({ children }) => {
    const [bookingModel, setBookingModel] = useState()

    const handleOpenModel = (status) => {
        setBookingModel(status)
      }

  return (
    <MainBookingStatusContext.Provider value={{ bookingModel, handleOpenModel }}>
      {children}
    </MainBookingStatusContext.Provider>
  );
};

export default MainBookingStatusProvider;
