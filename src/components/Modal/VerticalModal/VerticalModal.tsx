import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import Portal from '../Portal';

const backDropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const modalVariant = {
  hidden: { right: '-100vw' },
  visible: { right: 0 },
};

const VerticalModal = ({
  hide,
  isCartOpen,
  children,
}: {
  hide: () => void;
  isCartOpen: boolean;
  children: React.ReactNode;
}) => {
  let modalContentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    /***
   * Handle outside click fuction
   *This function will set the isOpen 
    state to false if user click outside 
    of the modal content.
    ***/
    const handleOutSideClick = (e: any) => {
      if (isCartOpen && !modalContentRef?.current?.contains(e.target)) {
        hide();
      }
    };
    if (isCartOpen) {
      document?.addEventListener('mousedown', handleOutSideClick);
    }

    // removing the event listener
    return () => {
      document?.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [hide, isCartOpen]);

  return (
    <>
      {isCartOpen && (
        <Portal>
          <AnimatePresence>
            <motion.div
              initial="hidden"
              animate={isCartOpen ? 'visible' : 'hidden'}
              exit="hidden"
              variants={backDropVariant}
              transition={{ duration: 0.4 }}
              className="fixed w-full h-full bg-[rgba(36,36,36,0.68)]"
              style={isCartOpen ? { zIndex: 40 } : { zIndex: -1 }}
            >
              <motion.div
                initial="hidden"
                animate={isCartOpen ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: 0.1 }}
                exit="hidden"
                variants={modalVariant}
                className="fixed right-0 w-[35vw] lg:w-[25vw] h-screen bg-white px-5 py-4"
                style={isCartOpen ? { zIndex: 50 } : { zIndex: -1 }}
                ref={modalContentRef}
              >
                {/* Head section */}
                <div className="flex items-center justify-between">
                  <h4>Your cart</h4>
                  <button onClick={hide}>
                    <FaTimes />
                  </button>
                </div>
                {children}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </Portal>
      )}
    </>
  );
};

export default VerticalModal;
