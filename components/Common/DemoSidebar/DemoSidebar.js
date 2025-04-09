"use client"

import React, { useState } from "react";
import DemoSidebarContent from "./DemoSidebarContent";

const DemoSidebar = () => {
  const [sidebarModal, setSidebarModal] = useState(false);

  const toggleModal = () => {
    setSidebarModal(!sidebarModal);
  };

  return (
    <>
      <div className="demo-modal-panel" onClick={toggleModal}>
        <button className="sidebar-demo-control">
          <span>Demos</span>
        </button>
      </div>

      <DemoSidebarContent
        onClick={toggleModal}
        active={sidebarModal ? "active" : ""}
      />
    </>
  );
};

export default DemoSidebar;

