import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import {
  Button,
  Slider,
  Input,
  Search,
  Star,
  FeatherIcon,
  Pagination,
  CategoryMenu,
  Carousel,
  Select,
  Breadcrumb,
  InputNumber,
  Avatar,
  Checkbox,
  Cascader,
  Password,
  RadioGroup,
  Header,
  Footer,
  Image,
  DatePicker,
  TextArea,
  Radio,
  RangeDatePicker,
  TabFilter,
} from './lib';
import { Row, Col, Layout, Menu, Space } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import CurrencyNumberInput from './lib/CurrencyNumberInput';

const carouselBanner = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
const cascaderOptions = [
  {
    id: 'zhejiang',
    name: 'Zhejiang',
    type: 'parent',
    children: [
      {
        id: 'hangzhou',
        name: 'Hangzhou',
        type: 'child1',
        children: [
          {
            id: 'xihu',
            name: 'West Lake',
            type: 'child2',
          },
        ],
      },
    ],
  },
  {
    id: 'jiangsu',
    name: 'Jiangsu',
    children: [
      {
        id: 'nanjing',
        name: 'Nanjing',
        children: [
          {
            id: 'zhonghuamen',
            name: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const breadcrumbs = [
  { name: 'Home', url: '/' },
  { name: 'Example', url: '/example' },
];

const { Content } = Layout;

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setUserInfo({
  //       id: 'a38beb4df6f4423a961e78e3fb67b78e',
  //       userId: 'c60c786ed3294228855a675394734830',
  //       fullName: 'Phuc Test',
  //       email: 'phuc.test.register.1@yopmail.com',
  //       phone: '',
  //       dateOfBirth: null,
  //       gender: 0,
  //       avatar: null,
  //       languageCode: null,
  //       defaultShippingAddress: null,
  //     });
  //   }, 5000);
  // }, []);

  const languageDataHeader = {
    DOWNLOAD_MOBILE_APP: 'Download Mobile App',
    BECOME_A_SELLER: 'Become a Seller',
    HELP_CENTER: 'Help Center',
    ENGLISH: 'English',
    LAOS: 'Laos',
    SEARCH_FOR_PRODUCT_BRAND: 'testtttttttt',
    NOTIFICATION: 'Notification',
    MESSAGE: 'Message',
    MY_CART: 'My Cart',
    LOGIN: 'Login',
    SIGN_UP: 'Sign up',
    WELCOME: 'Welcome',
    MY_PROFILE: 'My Profile',
    MY_ORDERS: 'My Orders',
    MY_WISHLIST: 'My WishList',
    MY_REVIEWS: 'My Reviews',
    LOG_OUT: 'Log out',
    LOG_IN: 'Log in',
    PLEASE_LOG_IN_TO_VIEW_YOUR_NOTIFICATION:
      'Please log in to view your notification',
    PLEASE_LOG_IN_TO_VIEW_YOUR_MESSAGE: 'Please log in to view your message',
    CHECK_MY_ORDER_STATUS: 'Check My Order Status',
    ORDER_ID: 'Order ID',
    CHECK: 'Check',
  };

  const languageDataFooter = {
    DOWNLOAD_MOBILE_APP: 'Download Mobile App',
    CUSTOMER_CARE: 'CUSTOMER CARE',
    CUSTOMER_CARE_HOTLINE: 'Customer Care Hotline',
    THE_FREQUENTLY_ASKED_QUESTIONS: 'The frequently asked questions',
    REQUEST_SUPPORT: 'Request support',
    HOW_TO_ORDER: 'How to order',
    HOW_WE_TRANSPORT: 'How we transport',
    POLICY_CHANGE_PAY: 'Policy Change Pay',
    CUSTOMER_SUPPORT: 'Customer Support',
    SECURITY_REPORT: 'Security Report',
    ABOUT_US: 'ABOUT US',
    ABOUT_BANANA_SHOP: 'About Banana Shop',
    RECRUITMENT: 'Recruitment',
    POLICY_PRIVACY: 'Policy Privacy',
    POLICY_PAYMENT: 'Policy payment',
    FOLLOW_US: 'FOLLOW US',
    OFFICE_ADDRESS: 'Office Address',
    OUR_PAYMENT_METHOD: 'Our Payment Method',
  };

  const onClickMenu = ({ item, key, keyPath, domEvent }) => {
    switch (key) {
      default:
        return;
    }
  };

  const menu = (
    <Menu onClick={onClickMenu}>
      <Menu.Item key="0">
        <Space size={15}>
          <Image src="/images/my_profile.svg" />
          <span>My Profile</span>
        </Space>
      </Menu.Item>
      <Menu.Item key="1">
        <Space size={15}>
          <Image src="/images/my_orders.svg" />
          <span>My Orders</span>
        </Space>
      </Menu.Item>
      <Menu.Item key="2">
        <Space size={15}>
          <Image src="/images/my_wishlist.svg" />
          <span>My Wishlist</span>
        </Space>
      </Menu.Item>
      <Menu.Item key="3">
        <Space size={15}>
          <Image src="/images/my_reviews.svg" />
          <span>My Reviews</span>
        </Space>
      </Menu.Item>
      <Menu.Item key="4">
        <Space size={15}>
          <Image src="/images/logout.svg" />
          <span>Log out</span>
        </Space>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="app">
      <Layout>
        <Header
          userInfoMenuProps={{ userInfo, menu }}
          languageData={languageDataHeader}
        />
        <Content style={{ marginTop: '20px', backgroundColor: '#ffffff' }}>
          <div className="feature-wrapper">
            <Row className="feature-item">
              <Col span={4}>CurrencyNumberInput</Col>
              <Col span={12}>
                <CurrencyNumberInput />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>TabFilter</Col>
              <Col span={12}>
                <TabFilter />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>RangeDatePicker</Col>
              <Col span={6}>
                <RangeDatePicker />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>DatePicker</Col>
              <Col span={6}>
                <DatePicker />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Cascader</Col>
              <Col span={6}>
                <Cascader
                  options={cascaderOptions}
                  placeholder="Please select"
                  fieldNames={{ label: 'name', value: 'id' }}
                />
              </Col>
            </Row>

            <Row className="feature-item">
              <Col span={4}>Input</Col>
              <Col span={6}>
                <Input size="large" />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>TextArea</Col>
              <Col span={6}>
                <TextArea size="large" />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Password</Col>
              <Col span={6}>
                <Password size="large" />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Input Number</Col>
              <Col span={6}>
                <InputNumber />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Search</Col>
              <Col span={6}>
                <Search />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Button</Col>
              <Col span={6}>
                <Button>Button</Button>
                <Button disabled>Disable</Button>
                <Button type="outline">Outline</Button>
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Star</Col>
              <Col span={6}>
                <Star defaultValue={3} />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>FeatherIcon</Col>
              <Col span={6}>
                <FeatherIcon icon="x" />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Avatar</Col>
              <Col span={6}>
                <Avatar />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Pagination</Col>
              <Col span={10}>
                <Pagination showSizeChanger defaultCurrent={6} total={200} />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Breadcrumb</Col>
              <Col span={10}>
                <Breadcrumb
                  separator={<RightOutlined style={{ fontSize: '8px' }} />}
                  breadcrumbs={breadcrumbs}
                />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Slider</Col>
              <Col span={10}>
                <Slider trackText="Slide to unlock" />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Select</Col>
              <Col span={6}>
                <Select
                  showSearch
                  options={[
                    { name: 'label', id: 'value' },
                    { name: 'label 1', id: 'value1' },
                  ]}
                  size="large"
                />
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Checkbox</Col>
              <Col span={6}>
                <Checkbox>Checkbox</Checkbox>
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Radio</Col>
              <Col span={6}>
                <Radio>Radio</Radio>
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>RadioGroup</Col>
              <Col span={6}>
                <RadioGroup
                  options={[
                    { label: 'Yes', value: true, disabled: false },
                    { label: 'No', value: false, disabled: true },
                  ]}
                />
              </Col>
            </Row>
            <Row className="feature-item" align="stretch">
              <Col span={4}>CategoryMenu</Col>
              <Col span={3}>
                <CategoryMenu options={cascaderOptions} />
              </Col>
              <Col span={7}>
                <div
                  style={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#FDBF00',
                  }}
                ></div>
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Carousel</Col>
              <Col span={10}>
                <Carousel infinite={false}>
                  {carouselBanner.map((el, idx) => (
                    <div className="carousel-banner" key={idx}>
                      <h3>{el}</h3>
                    </div>
                  ))}
                </Carousel>
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Carousel 1 row, multiple items</Col>
              <Col span={10}>
                <Carousel slidesToShow={3} infinite={false}>
                  {carouselBanner.map((el, idx) => (
                    <div className="carousel-banner" key={idx}>
                      <h3>{el}</h3>
                    </div>
                  ))}
                </Carousel>
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Carousel 2 rows, multiple items</Col>
              <Col span={10}>
                <Carousel
                  classNameArrow="two-rows"
                  rows={2}
                  slidesToShow={3}
                  infinite={false}
                >
                  {carouselBanner.map((el, idx) => (
                    <div className="carousel-banner" key={idx}>
                      <h3>{el}</h3>
                    </div>
                  ))}
                </Carousel>
              </Col>
            </Row>
            <Row className="feature-item">
              <Col span={4}>Image</Col>
              <Col span={6}>
                <Image src="/images/shoe.png" />
              </Col>
            </Row>
          </div>
        </Content>
        <Footer languageData={languageDataFooter} />
      </Layout>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
