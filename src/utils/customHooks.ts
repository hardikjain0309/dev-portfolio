import { useEffect } from "react";

export const useClickOutside = (handler: () => void, ref: React.RefObject<HTMLElement|null>) => {
  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handler, ref]);

  return ref;
}
  