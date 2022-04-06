import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LabelForm = ({ label, hideRequireMark }) => {
  return (
    <span className="label-custom">
      {label} {!hideRequireMark && <span className="mark">*</span>}
    </span>
  );
};

LabelForm.defaultProps = {
  label: '',
  hideRequireMark: false,
};

LabelForm.propTypes = {
  label: PropTypes.string.isRequired,
  hideRequireMark: PropTypes.bool,
};

export default LabelForm;
