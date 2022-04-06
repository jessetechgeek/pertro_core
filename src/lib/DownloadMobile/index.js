import React from 'react';
import './styles.scss';
import Image from '../Image';
import QRCode from 'react-qr-code';
import { Space } from 'antd';

const DownloadMobile = ({ className, appStoreSrc, googlePlaySrc }) => {
  return (
    <div className={['download-mobile-wrapper', className].join(' ')}>
      <Space size={11} align="start">
        <div className="qr-wrapper">
          <QRCode size={80} value="Hello, World!" />
        </div>
        <div className="store">
          <div className="appstore">
            <a>
              <Image src={appStoreSrc} />
            </a>
          </div>
          <div>
            <a>
              <Image src={googlePlaySrc} />
            </a>
          </div>
        </div>
      </Space>
    </div>
  );
};

DownloadMobile.defaultProps = {
  className: '',
  appStoreSrc: '/images/appstore.png',
  googlePlaySrc: '/images/googleplay.png',
};

export default DownloadMobile;
