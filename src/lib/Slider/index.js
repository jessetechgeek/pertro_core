import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useRef,
} from 'react';
import './styles.scss';
import ReactSlider from 'react-slider';
import { DoubleRightOutlined } from '@ant-design/icons';

const Slider = forwardRef(
  (
    { trackText, onFinish, cooldownTime, languageData, localConstanst },
    ref
  ) => {
    const [value, setValue] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [cooldown, setCooldown] = useState(0);
    const [cooldownInterval, setCooldownInterval] = useState(null);
    const sliderRef = useRef(null);
    let blur = false;

    useEffect(() => {
      const expireCooldownOtpMiliSeconds = localStorage.getItem(localConstanst);
      if (expireCooldownOtpMiliSeconds) {
        const currentMiliSeconds = new Date().getTime();
        if (expireCooldownOtpMiliSeconds > currentMiliSeconds) {
          const seconds = Math.ceil(
            (expireCooldownOtpMiliSeconds - currentMiliSeconds) / 1000
          );
          if (seconds > 1) {
            startCooldown(seconds);
          }
        }
      }
    }, []);

    useEffect(() => {
      if (cooldown === 0 && cooldownInterval) {
        setDisabled(false);
        clearInterval(cooldownInterval);
        setCooldownInterval(null);
        localStorage.removeItem(localConstanst);
      }
    }, [cooldown, cooldownInterval]);

    useImperativeHandle(ref, () => ({
      resetValue: () => resetValue(value),
      setTrueDisabled: () => {
        setDisabled(true);
      },
      setFalseDisabled: () => {
        setDisabled(false);
      },
      startCooldown: startCooldown,
      removeLocalCooldown: () => localStorage.removeItem(localConstanst),
    }));

    const resetValue = (value) => {
      setTimeout(() => {
        if (value > 0) {
          setDisabled(true);
          const step = value > 80 ? 3 : value > 50 ? 2 : value > 30 ? 1.5 : 1;
          let newVal = value - step;
          if (newVal < 0) {
            newVal = 0;
          }
          setValue(newVal);
          resetValue(newVal);
        } else {
          setDisabled(false);
        }
      }, 0);
    };

    const startCooldown = (cdt) => {
      if (!cdt) {
        cdt = cooldownTime;
      }
      localStorage.setItem(localConstanst, new Date().getTime() + cdt * 1000);
      setCooldown(cdt);
      if (cooldownInterval) {
        clearInterval(cooldownInterval);
        setCooldownInterval(null);
      }
      const interval = setInterval(() => {
        setDisabled(true);
        setCooldown((cooldown) => cooldown - 1);
      }, 1000);
      setCooldownInterval(interval);
    };

    const onChange = (val) => {
      setValue(val);
      if (val >= 100) {
        blur = true;
        sliderRef.current.onBlur();
        if (onFinish) {
          onFinish();
        } else {
          resetValue(100);
          startCooldown();
        }
      }
    };

    const onAfterChange = (val) => {
      if (blur) {
        blur = false;
        val = 100;
        return;
      }
      if (value > 0 && value < 100) {
        resetValue(value);
      }
    };

    return (
      <div className="slider-wrapper-custom">
        <ReactSlider
          ref={sliderRef}
          className="slider-custom"
          thumbClassName="thumb-custom"
          trackClassName="track-custom"
          snapDragDisabled={true}
          disabled={disabled}
          onChange={onChange}
          renderThumb={(props, state) => (
            <div {...props}>
              <DoubleRightOutlined />
            </div>
          )}
          value={value}
          onAfterChange={onAfterChange}
        />
        <div className="track-text">
          <span>
            {cooldown > 0
              ? `${languageData.WAIT} ${cooldown} ${languageData.SECONDS_TO_GET_NEW_CODE}`
              : trackText}
          </span>
        </div>
      </div>
    );
  }
);

Slider.defaultProps = {
  trackText: '',
  cooldownTime: 60,
  languageData: {
    WAIT: 'Wait',
    SECONDS_TO_GET_NEW_CODE: 'seconds to get new code',
  },
  localConstanst: 'BANANA_EXPIRED_COOLDOWN_OTP',
};

export default Slider;
