import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mainBody = document.querySelector('body')!;
    mainBody.classList.add('overflow-hidden');
    return () => {
      setMounted(false);
      mainBody.classList.remove('overflow-hidden');
    };
  }, []);

  return mounted
    ? createPortal(children, document.querySelector('#modal')!)
    : null;
};

export default Portal;
