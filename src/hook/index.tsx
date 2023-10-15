import { useEffect, useRef, useState } from 'react';

export default function useOutsideAlerter(initialIsVisible: any) {
  const [isShow, setIsShow] = useState(initialIsVisible);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isShow, setIsShow };
}
