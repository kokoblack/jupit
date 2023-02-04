import {useRef, useEffect} from 'react'

export const CloseOutsideMenu1 = (callback) => {
    const ref= useRef();

    useEffect(() => {
      const handleClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            callback();
          }
      };
  
      document.addEventListener('click', handleClick);
  
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, [ref]);
  
    return ref ;
}

export const CloseOutsideMenu2 = (callback) => {
  const ref1= useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref1.current && !ref1.current.contains(event.target)) {
          callback();
        }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref1]);

  return ref1 ;
}