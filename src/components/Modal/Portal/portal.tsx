import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // adding class when modal is active
    const mainBody = document.querySelector('body')!;
    const modalDiv = document.querySelector('#modal');
    mainBody?.classList.add('overflow-hidden');
    modalDiv?.classList.add('active-modal');
    return () => {
      // removing class when modal is active
      setMounted(false);
      mainBody.classList.remove('overflow-hidden');
      modalDiv?.classList.remove('active-modal');
    };
  }, []);

  return mounted
    ? createPortal(children, document.querySelector('#modal')!)
    : null;
};

export default Portal;
