import { colorTextSecondary, secondaryLink } from '@/theme';
import { FacebookFilled, YoutubeFilled } from '@ant-design/icons';
import { Space, Typography } from 'antd';
import Link from 'next/link';
import React from 'react';

const { Text } = Typography;

export const Footer = () => {
  return (
    <Space direction="vertical" size="large">
      <Space size="middle">
        <Link href="https://www.facebook.com/AgroKolegeBerezhany/" style={{ fontSize: 20 }}>
          <FacebookFilled style={{ color: colorTextSecondary }} />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UC03sYf1Ldmy-P5P6VnOGSXA/featured?view_as=subscriber"
          style={{ fontSize: 20 }}
        >
          <YoutubeFilled style={{ color: colorTextSecondary }} />
        </Link>
      </Space>
      <Text type="secondary" style={{ fontSize: '8px !important' }}>
        © БФК. Усі права захищені.{' '}
        <Link href="https://github.com/DonAlexandro" style={secondaryLink} target="_blank">
          Автор
        </Link>
      </Text>
    </Space>
  );
};
