import React from 'react';
import { Layout as LayoutAntd, Space } from 'antd';
import './styles.scss';
import DownloadMobile from '../DownloadMobile';
import LazyImage from '../LazyImage';

const { Footer: FooterAntd } = LayoutAntd;

const Footer = ({
  appStoreSrc,
  googlePlaySrc,
  contactInfo,
  languageData,
  links,
}) => {
  return (
    <FooterAntd id="banana-footer">
      <div className="banana-footer-wrapper">
        <div className="footer-wrapper">
          <div className="footer-column customer-care">
            <h3>{languageData.CUSTOMER_CARE}</h3>
            <div className="footer-column-content">
              <Space size={6} direction="vertical">
                <a className="hotline" href={`tel:${contactInfo.hotline}`}>
                  {languageData.CUSTOMER_CARE_HOTLINE}: {contactInfo.hotline}
                </a>
                {/* <a href={links.frequentAskedQuestions}>
                  {languageData.THE_FREQUENTLY_ASKED_QUESTIONS}{' '}
                </a>
                <a href={links.requestSupport}>
                  {languageData.REQUEST_SUPPORT}
                </a>
                <a href={links.howToOrder}>{languageData.HOW_TO_ORDER}</a>
                <a href={links.howWeTransport}>
                  {languageData.HOW_WE_TRANSPORT}
                </a>
                <a href={links.policyChangePay}>
                  {languageData.POLICY_CHANGE_PAY}
                </a> */}
                <a href={`mailto:${contactInfo.customerSupport}`}>
                  {languageData.CUSTOMER_SUPPORT}: {contactInfo.customerSupport}
                </a>
                {/* <a href={`mailto:${contactInfo.securityReport}`}>
                  {languageData.SECURITY_REPORT}: {contactInfo.securityReport}
                </a> */}
              </Space>
            </div>
          </div>
          <div className="footer-column about">
            <h3>{languageData.ABOUT_US}</h3>
            <div className="footer-column-content">
              <Space size={6} direction="vertical">
                <a href={links.aboutBanana}>{languageData.ABOUT_BANANA_SHOP}</a>
                {/* <a href={links.recruitment}>{languageData.RECRUITMENT}</a> */}
                <a href={links.policyPrivacy}>{languageData.POLICY_PRIVACY}</a>
                {/* <a href={links.policyPayment}>{languageData.POLICY_PAYMENT}</a> */}
              </Space>
            </div>
          </div>
          <div className="footer-column follow-us">
            <h3>{languageData.FOLLOW_US}</h3>
            <div className="footer-column-content">
              <Space size={10}>
                <a href={links.fb}>
                  <LazyImage src="/social-images/fb.png" />
                </a>
                <a href={links.tw}>
                  <LazyImage src="/social-images/tw.png" />
                </a>
                <a href={links.lk}>
                  <LazyImage src="/social-images/lk.png" />
                </a>
                <a href={links.pin}>
                  <LazyImage src="/social-images/pin.png" />
                </a>
                <a href={links.be}>
                  <LazyImage src="/social-images/be.png" />
                </a>
              </Space>
            </div>
          </div>
          <div className="footer-column download">
            <h3>{languageData.DOWNLOAD_MOBILE_APP}</h3>
            <div className="footer-column-content">
              <DownloadMobile
                appStoreSrc={appStoreSrc}
                googlePlaySrc={googlePlaySrc}
              />
            </div>
          </div>
        </div>
        <div className="footer-location">
          <Space size={20.22} align="start">
            <div className="location-image">
              <LazyImage src="/images/location-pin.png" />
            </div>
            <div className="address-wrapper">
              <Space size={32}>
                <h3>
                  {languageData.OFFICE_ADDRESS}: {contactInfo.officeAddress}
                </h3>
                {/* <h3>{languageData.OUR_PAYMENT_METHOD}</h3> */}
              </Space>
              <div className="address">
                <span>{contactInfo.officeAddress}</span>
              </div>
            </div>
          </Space>
        </div>
      </div>
    </FooterAntd>
  );
};

Footer.defaultProps = {
  appStoreSrc: '/images/appstore.png',
  googlePlaySrc: '/images/googleplay.png',
  contactInfo: {
    hotline: '555 - 555444',
    officeAddress: '123 Wall Street, Laos',
    customerSupport: 'customer@bananashop.com',
    securityReport: 'security@bananashop.com',
  },
  languageData: {},
  links: {},
};

export default Footer;
