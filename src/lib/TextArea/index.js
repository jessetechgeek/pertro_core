import React from 'react'
import './styles.scss';
import { Input } from 'antd';

const { TextArea: TextAreaAntd } = Input;

const TextArea = ({ className, ...rest }) => {
  return (
    <TextAreaAntd className={['textarea-custom', className].join(' ')} {...rest} />
  )
}

TextArea.defaultProps = {
  className: '',
};

export default TextArea;