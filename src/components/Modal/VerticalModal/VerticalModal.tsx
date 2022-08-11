import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import Portal from '../Portal';
import { useOutsideClick } from 'src/hooks/useOutsideClick';

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
  // hook might need to modify
  useOutsideClick(hide, isCartOpen, modalContentRef);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <Portal>
          {/* this is back-drop or the gray background */}
          <motion.div
            initial="hidden"
            animate={isCartOpen ? 'visible' : 'hidden'}
            exit={{
              ...backDropVariant.hidden,
              transition: {
                delay: 0.3,
              },
            }}
            variants={backDropVariant}
            transition={{ duration: 0.4 }}
            className="fixed w-full h-full bg-[rgba(36,36,36,0.68)]"
            style={isCartOpen ? { zIndex: 40 } : { zIndex: -1 }}
          >
            {/* this is the main body */}
            <motion.div
              initial="hidden"
              animate={isCartOpen ? 'visible' : 'hidden'}
              transition={{ duration: 0.5, delay: 0.1 }}
              exit="hidden"
              variants={modalVariant}
              className="fixed right-0 w-[70vw] msm:w-[55vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] h-screen bg-white px-5 py-4"
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
        </Portal>
      )}
    </AnimatePresence>
  );
};

export default VerticalModal;
