import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import useMeasure from 'react-use-measure';

const ResizeableHeight = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  // Height
  const h = isOpen ? height : 0;
  return (
    <motion.div
      animate={{ height: h || 'auto' }}
      className="relative overflow-hidden"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div ref={ref} className={h ? 'absolute' : 'relative'}>
            {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ResizeableHeight;

/*
  Replacer function to JSON.stringify that ignores
  circular references and internal React properties.
  https://github.com/facebook/react/issues/8669#issuecomment-531515508
*/
const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: string, value: object) => {
    if (key.startsWith('_')) return; // Don't compare React's internal props.
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};
