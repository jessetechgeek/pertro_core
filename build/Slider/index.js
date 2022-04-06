import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useImperativeHandle, forwardRef, useRef } from 'react';
import './styles.scss';
import ReactSlider from 'react-slider';
import { DoubleRightOutlined } from '@ant-design/icons';
var Slider = forwardRef(function (_ref, ref) {
  var trackText = _ref.trackText,
      onFinish = _ref.onFinish,
      cooldownTime = _ref.cooldownTime,
      languageData = _ref.languageData,
      localConstanst = _ref.localConstanst;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      disabled = _useState4[0],
      setDisabled = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      cooldown = _useState6[0],
      setCooldown = _useState6[1];

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      cooldownInterval = _useState8[0],
      setCooldownInterval = _useState8[1];

  var sliderRef = useRef(null);
  var blur = false;
  useEffect(function () {
    var expireCooldownOtpMiliSeconds = localStorage.getItem(localConstanst);

    if (expireCooldownOtpMiliSeconds) {
      var currentMiliSeconds = new Date().getTime();

      if (expireCooldownOtpMiliSeconds > currentMiliSeconds) {
        var seconds = Math.ceil((expireCooldownOtpMiliSeconds - currentMiliSeconds) / 1000);

        if (seconds > 1) {
          startCooldown(seconds);
        }
      }
    }
  }, []);
  useEffect(function () {
    if (cooldown === 0 && cooldownInterval) {
      setDisabled(false);
      clearInterval(cooldownInterval);
      setCooldownInterval(null);
      localStorage.removeItem(localConstanst);
    }
  }, [cooldown, cooldownInterval]);
  useImperativeHandle(ref, function () {
    return {
      resetValue: function resetValue() {
        return _resetValue(value);
      },
      setTrueDisabled: function setTrueDisabled() {
        setDisabled(true);
      },
      setFalseDisabled: function setFalseDisabled() {
        setDisabled(false);
      },
      startCooldown: startCooldown,
      removeLocalCooldown: function removeLocalCooldown() {
        return localStorage.removeItem(localConstanst);
      }
    };
  });

  var _resetValue = function _resetValue(value) {
    setTimeout(function () {
      if (value > 0) {
        setDisabled(true);
        var step = value > 80 ? 3 : value > 50 ? 2 : value > 30 ? 1.5 : 1;
        var newVal = value - step;

        if (newVal < 0) {
          newVal = 0;
        }

        setValue(newVal);

        _resetValue(newVal);
      } else {
        setDisabled(false);
      }
    }, 0);
  };

  var startCooldown = function startCooldown(cdt) {
    if (!cdt) {
      cdt = cooldownTime;
    }

    localStorage.setItem(localConstanst, new Date().getTime() + cdt * 1000);
    setCooldown(cdt);

    if (cooldownInterval) {
      clearInterval(cooldownInterval);
      setCooldownInterval(null);
    }

    var interval = setInterval(function () {
      setDisabled(true);
      setCooldown(function (cooldown) {
        return cooldown - 1;
      });
    }, 1000);
    setCooldownInterval(interval);
  };

  var onChange = function onChange(val) {
    setValue(val);

    if (val >= 100) {
      blur = true;
      sliderRef.current.onBlur();

      if (onFinish) {
        onFinish();
      } else {
        _resetValue(100);

        startCooldown();
      }
    }
  };

  var onAfterChange = function onAfterChange(val) {
    if (blur) {
      blur = false;
      val = 100;
      return;
    }

    if (value > 0 && value < 100) {
      _resetValue(value);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "slider-wrapper-custom"
  }, /*#__PURE__*/React.createElement(ReactSlider, {
    ref: sliderRef,
    className: "slider-custom",
    thumbClassName: "thumb-custom",
    trackClassName: "track-custom",
    snapDragDisabled: true,
    disabled: disabled,
    onChange: onChange,
    renderThumb: function renderThumb(props, state) {
      return /*#__PURE__*/React.createElement("div", props, /*#__PURE__*/React.createElement(DoubleRightOutlined, null));
    },
    value: value,
    onAfterChange: onAfterChange
  }), /*#__PURE__*/React.createElement("div", {
    className: "track-text"
  }, /*#__PURE__*/React.createElement("span", null, cooldown > 0 ? "".concat(languageData.WAIT, " ").concat(cooldown, " ").concat(languageData.SECONDS_TO_GET_NEW_CODE) : trackText)));
});
Slider.defaultProps = {
  trackText: '',
  cooldownTime: 60,
  languageData: {
    WAIT: 'Wait',
    SECONDS_TO_GET_NEW_CODE: 'seconds to get new code'
  },
  localConstanst: 'BANANA_EXPIRED_COOLDOWN_OTP'
};
export default Slider;