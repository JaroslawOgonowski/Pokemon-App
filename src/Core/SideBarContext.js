import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const sideBarOnScreenWidth = () => {
    if (window.innerWidth >= 767) return false;
    else return true;
  };

  const [sideBarOn, setSideBarOn] = useState(sideBarOnScreenWidth());

  return (
    <SidebarContext.Provider value={{ sideBarOn, setSideBarOn }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
