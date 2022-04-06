import React from 'react'
import './styles.scss';
import Input from '../../../Input';
import Button from '../../../Button';
import { Form } from 'antd';

const CheckMyOrderStatus = ({ languageData, onClick }) => {
  const onFinish = value => {
    onClick(value.orderId)
  }

  return (
    <div className="check-my-order-status-wrapper">
      <Form onFinish={onFinish} layout="vertical" size="large">
        <Form.Item name="orderId" label={languageData.ORDER_ID}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">
            {languageData.CHECK}
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
};

export default CheckMyOrderStatus