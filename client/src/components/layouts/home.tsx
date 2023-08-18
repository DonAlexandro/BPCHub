'use client';
import { Col, Divider, Grid, Row } from 'antd';
import React, { PropsWithChildren } from 'react';
import { Ads, Footer, HeaderComponent } from '..';

const { useBreakpoint } = Grid;

export const HomeLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const screens = useBreakpoint();

  return (
    <>
      {!screens.xl && <HeaderComponent />}
      <Row gutter={48} style={{ marginRight: 0 }}>
        <Col xl={{ span: 17, order: 2 }} md={24} sm={24} xs={24} style={{ paddingRight: 0 }}>
          {children}
        </Col>
        <Col xl={{ span: 7, order: 1 }} md={24} sm={24} xs={24}>
          <div style={{ padding: screens.lg ? 0 : '0 24px' }}>
            {screens.xl && <HeaderComponent />}
            <Divider style={{ margin: '48px 0 24px 0' }} />
            <Ads />
            <Divider style={{ margin: '24px 0 48px 0' }} />
            <Footer />
          </div>
        </Col>
      </Row>
    </>
  );
};
