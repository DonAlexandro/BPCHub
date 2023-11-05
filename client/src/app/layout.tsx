'use client';

import { useMemo } from 'react';
import { StyledComponentsRegistry } from '@/lib/antd';
import { theme } from '@/theme/override';
import { ConfigProvider, Layout, Grid, Spin } from 'antd';
import { Content, Navbar } from '@/components/';
import { ReduxProvider } from '@/store/provider';
import Styled from './home.styled';

import 'antd/dist/reset.css';

const { useBreakpoint } = Grid;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const screens = useBreakpoint();

  const areScreensLoaded = useMemo(() => Object.keys(screens).length, [screens]);

  return (
    <html lang="uk-UA">
      <Styled.Body>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>
              {areScreensLoaded ? (
                <Layout>
                  <Navbar />
                  <Content>{children}</Content>
                </Layout>
              ) : (
                <Styled.ScreensLoaderWrapper>
                  <Spin size="large" />
                </Styled.ScreensLoaderWrapper>
              )}
            </ConfigProvider>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </Styled.Body>
    </html>
  );
}
