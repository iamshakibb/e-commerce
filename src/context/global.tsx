import React, { createContext, useState } from 'react';

export type globalContextType = {
  isCartOpen: boolean;
  hideCart: () => void;
  showCart: () => void;
};

export const GlobalContext = createContext<globalContextType | null>(null);
const MainContext = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // close/hide sidemodal or vertical modal
  const hideCart = () => {
    console.log('fuck');
    setIsCartOpen(false);
  };
  // show/open sidemodal or vertical modal
  const showCart = () => {
    setIsCartOpen(true);
  };
  return (
    <GlobalContext.Provider value={{ isCartOpen, hideCart, showCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default MainContext;
