import { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [istype, setType] = useState(false);
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen,istype, setType }}>
      {children}
    </SidebarContext.Provider>
  );
};
