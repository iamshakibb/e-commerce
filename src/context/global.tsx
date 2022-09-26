import { useRouter } from 'next/router';
import React, { createContext, useEffect, useState } from 'react';

export type globalContextType = {
  isCartOpen: boolean;
  hideCart: () => void;
  showCart: () => void;
};

export const GlobalContext = createContext<globalContextType | null>(null);
const MainContext = ({ children }: { children: React.ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  // close/hide sidemodal or vertical modal
  const hideCart = () => {
    setIsCartOpen(false);
  };
  // show/open sidemodal or vertical modal
  const showCart = () => {
    setIsCartOpen(true);
  };

  useEffect(() => {
    const handleRouterChange = () => {
      isCartOpen ? hideCart() : undefined;
    };
    router.events.on('routeChangeComplete', handleRouterChange);
    router.events.on('hashChangeComplete', handleRouterChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
      router.events.off('hashChangeComplete', handleRouterChange);
    };
  }, [router, isCartOpen]);
  return (
    <GlobalContext.Provider value={{ isCartOpen, hideCart, showCart }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default MainContext;
