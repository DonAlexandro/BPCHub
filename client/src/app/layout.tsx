import { StyledComponentsRegistry } from '@/lib/antd';
import { theme } from '@/theme/override';
import { ConfigProvider, Layout } from 'antd';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { ContentWrapper } from '@/components/';

import 'antd/dist/reset.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'БАТК | Перша шпальта',
  description: 'Офіційний сайт БФК',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk-UA">
      <body>
        <StyledComponentsRegistry>
          <ConfigProvider theme={theme}>
            <Layout>
              <Navbar />
              <ContentWrapper>{children}</ContentWrapper>
            </Layout>
          </ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
