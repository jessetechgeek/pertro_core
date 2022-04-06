import React, { useRef } from 'react';
import { Dropdown as DropdownAntd } from 'antd';

const Dropdown = ({ children, ...rest }) => {
  const popupRef = useRef(null);
  return (
    <div className="dropdown-custom">
      <DropdownAntd
        getPopupContainer={() =>
          popupRef && popupRef.current ? popupRef.current : ''
        }
        {...rest}
      >
        {children}
      </DropdownAntd>
      <div ref={popupRef} />
    </div>
  );
};

export default Dropdown;
