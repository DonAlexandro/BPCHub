import { StyledComponentsRegistry } from '@/lib/antd';
import { theme } from '@/theme/override';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';

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
          <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
