import React from 'react';
import './styles.scss';
import { Row, Col } from 'antd';
import Image from '../Image';

const MenuLogin = ({
  src,
  onClickLogin,
  onClickSignUp,
  text,
  languageData,
}) => {
  return (
    <div className="menu-login-wrapper">
      <div className="menu-login-alert">
        <div className="alert-img">
          <Image src={src} />
        </div>
        <div className="alert-content">{text}</div>
      </div>
      <div className="menu-login-footer">
        <Row>
          <Col span={12}>
            <div className="btn" onClick={onClickLogin}>
              {languageData.LOG_IN}
            </div>
          </Col>
          <Col span={12}>
            <div className="btn" onClick={onClickSignUp}>
              {languageData.SIGN_UP}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MenuLogin;
