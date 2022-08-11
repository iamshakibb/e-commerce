import { useEffect } from "react";


/***
* Handle outside click fuction
*This function will set the isOpen 
*state to false if user click outside 
*of the modal content.
***/

export function useOutsideClick(
  hide: () => void,
  elementState: boolean,
  contentRef: React.RefObject<HTMLDivElement>
) {

  useEffect(() => {

    const handleOutSideClick = (e: any) => {
      if (elementState && !contentRef?.current?.contains(e.target)) {
        hide();
      }
    };
    if (elementState) {
      document?.addEventListener('mousedown', handleOutSideClick);
    }

    // removing the event listener
    return () => {
      document?.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [hide, elementState, contentRef]);
}