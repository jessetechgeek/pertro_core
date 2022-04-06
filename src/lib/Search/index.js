import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useCallback,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

import { Input } from 'antd';

const { Search: SearchAntd } = Input;

const Search = forwardRef(({ type, placeholder, ...rest }, ref) => {
  const [visible, setVisible] = useState(true);
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => {
    setVisible(false);
    updateState({});
  }, []);

  useImperativeHandle(ref, () => ({
    forceUpdate: forceUpdate,
  }));

  useEffect(() => {
    if (!visible) {
      setVisible(true);
    }
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <SearchAntd
      className={`search-custom ${type}`}
      placeholder={placeholder}
      {...rest}
      enterButton
    />
  );
});

Search.propTypes = {
  type: PropTypes.oneOf(['', 'primary']),
  placeholder: PropTypes.string,
};

Search.defaultProps = {
  type: 'primary',
  placeholder: '',
};

export default Search;
