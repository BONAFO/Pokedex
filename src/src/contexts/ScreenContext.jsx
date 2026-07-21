"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ScreenContext = createContext();

const MOBILE_BREAKPOINT = 450;

export function ScreenProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </ScreenContext.Provider>
  );
}

export function useScreen() {
  return useContext(ScreenContext);
}
