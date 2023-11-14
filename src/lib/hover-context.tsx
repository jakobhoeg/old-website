// HoverContext.tsx
'use client'
import React, { createContext, useContext, useState } from 'react';

interface HoverContextProps {
  isHovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<boolean>>;
}

const HoverContext = createContext<HoverContextProps | undefined>(undefined);

export const HoverProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovered, setHovered }}>
      {children}
    </HoverContext.Provider>
  );
};

export const useHover = () => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error('useHover must be used within a HoverProvider');
  }
  return context;
};
