import { useEffect, useState } from "react";

interface useWindowSizeType {
  width: number | undefined,
  height: number | undefined,
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<useWindowSizeType>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      const handleResize = (): void => {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}