import React, { useEffect, useState } from 'react';

const useOutsideAlerter = (ref) => {
  const [outside, setOutside] = useState(true);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutside(true);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return [outside, setOutside];
};

export default useOutsideAlerter;
