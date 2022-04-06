import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Cascader as CascaderAntd } from 'antd';

const CategoryMenu = ({
  handleClick,
  options,
  blurWhenMouseLeave,
  ...rest
}) => {
  const [value, setValue] = useState([]);
  const cascaderRef = useRef(null);

  useEffect(() => {
    if (blurWhenMouseLeave) {
      const blur = () => {
        if (value.length > 0) {
          setValue([]);
        } else {
          setValue(['blur']);
        }
      };
      setTimeout(() => {
        const els = document.getElementsByClassName(
          'category-menu-popup-custom hide-search'
        );
        if (els && els[0]) {
          els[0].onmouseleave = blur;
        }
      }, 0);
    }

    return () => {
      if (blurWhenMouseLeave) {
        setTimeout(() => {
          const els = document.getElementsByClassName(
            'category-menu-popup-custom hide-search'
          );
          if (els && els[0]) {
            els[0].onmouseleave = () => {};
          }
        }, 0);
      }
    };
  }, [value, blurWhenMouseLeave]);

  const onChange = (val, selectedOptions) => {
    setValue(val);
    handleClick(val, selectedOptions);
  };

  options = [...options, { name: 'blur', id: 'blur' }];

  return (
    <div className="category-menu-custom-wrapper">
      <div id="category-menu-popup-container"></div>
      <CascaderAntd
        ref={cascaderRef}
        className="category-menu-custom hide-search"
        popupClassName="category-menu-popup-custom hide-search"
        changeOnSelect={true}
        getPopupContainer={() =>
          document.getElementById('category-menu-popup-container')
        }
        popupVisible={true}
        showSearch={false}
        expandTrigger={'hover'}
        options={options}
        onChange={onChange}
        value={value}
        fieldNames={{ label: 'name', value: 'id' }}
        {...rest}
      />
    </div>
  );
};

CategoryMenu.propTypes = {
  blurWhenMouseLeave: PropTypes.bool,
  handleClick: PropTypes.func,
  ...CascaderAntd.propTypes,
};

CategoryMenu.defaultProps = {
  blurWhenMouseLeave: true,
  handleClick: (value, selectedOptions) =>
    console.log('handleClick', value, selectedOptions),
};

export default CategoryMenu;
