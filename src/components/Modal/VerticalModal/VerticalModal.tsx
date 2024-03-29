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
  title,
}: {
  hide: () => void;
  isCartOpen: boolean;
  children: React.ReactNode;
  title?: string;
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
              className="fixed right-0 w-[85vw] msm:w-[250px] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] h-screen bg-white py-4 overflow-y-auto"
              style={isCartOpen ? { zIndex: 50 } : { zIndex: -1 }}
              ref={modalContentRef}
            >
              {/* Head section */}
              <div className="flex items-center justify-between px-3">
                {title && (
                  <h4 className="text-sm font-semibold capitalize ">{title}</h4>
                )}
                <button className="text-base" onClick={hide}>
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
