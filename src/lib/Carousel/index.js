import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import './styles.scss';
import { Carousel as CarouselAntd } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const PrevArrow = (props) => {
  const { className, addClassName, style, onClick, icon } = props;
  return (
    <div className={[className, addClassName].join(' ')} onClick={onClick}>
      {icon}
    </div>
  );
};

const NextArrow = (props) => {
  const { className, addClassName, style, onClick, icon } = props;
  return (
    <div className={[className, addClassName].join(' ')} onClick={onClick}>
      {icon}
    </div>
  );
};

const Carousel = forwardRef(
  (
    { type, dots, classNameArrow, prevIcon, nextIcon, children, ...rest },
    ref
  ) => {
    const carouselAntdRef = useRef(null);

    useImperativeHandle(ref, () => ({
      goTo: (idx, dontAnimate = false) => {
        if (carouselAntdRef && carouselAntdRef.current) {
          carouselAntdRef.current.goTo(idx, dontAnimate);
        }
      },
    }));

    const props = {
      ...rest,
      dots,
      arrows: true,
      nextArrow: <NextArrow icon={nextIcon} addClassName={classNameArrow} />,
      prevArrow: <PrevArrow icon={prevIcon} addClassName={classNameArrow} />,
    };
    return (
      <div className="carousel-custom-wrapper">
        <CarouselAntd
          ref={carouselAntdRef}
          className={`carousel-custom ${type}`}
          {...props}
        >
          {children}
        </CarouselAntd>
      </div>
    );
  }
);

Carousel.defaultProps = {
  type: 'primary',
  dots: false,
  classNameArrow: 'banner',
  prevIcon: <LeftOutlined />,
  nextIcon: <RightOutlined />,
};

export default Carousel;
