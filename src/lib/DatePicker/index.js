import React, { useRef } from 'react';
import './styles.scss';
import { DatePicker as DatePickerAntd } from 'antd';
import moment from 'moment';

const DatePicker = ({ className, format, ...rest }) => {
  const datePickerPopupRef = useRef(null);

  return (
    <div className="date-picker-wrapper">
      <DatePickerAntd
        {...rest}
        className={['date-picker-custom', className].join(' ')}
        getPopupContainer={() =>
          datePickerPopupRef && datePickerPopupRef.current
        }
        format={format}
        dropdownClassName="datepicker-popup"
        selected={rest.value ? moment(rest.value) : ''}
        value={rest.value ? moment(rest.value) : ''}
        onChange={rest.onChange}
        placeholder={format}
        renderExtraFooter={null}
      />
      <div ref={datePickerPopupRef} className="date-picker-popup"></div>
    </div>
  );
};

DatePicker.defaultProps = {
  className: '',
  format: 'DD/MM/YYYY',
};

export default DatePicker;
