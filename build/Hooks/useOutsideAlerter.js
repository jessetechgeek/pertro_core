import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';

var useOutsideAlerter = function useOutsideAlerter(ref) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      outside = _useState2[0],
      setOutside = _useState2[1];

  useEffect(function () {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOutside(true);
      }
    } // Bind the event listener


    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
  return [outside, setOutside];
};

export default useOutsideAlerter;