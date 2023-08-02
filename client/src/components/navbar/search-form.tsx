'use client';
import { SearchOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React from 'react';

export const SearchForm: React.FC = () => {
  return (
    <Form>
      <Form.Item style={{ marginBottom: 0 }}>
        <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
      </Form.Item>
    </Form>
  );
};
