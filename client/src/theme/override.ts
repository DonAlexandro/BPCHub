import type { ThemeConfig } from 'antd';
import { Raleway, Source_Sans_3 } from 'next/font/google';
import { colorBorder, colorTextSecondary } from '.';

const raleway = Raleway({ subsets: ['latin', 'cyrillic-ext'] });
const sourceSans3 = Source_Sans_3({ subsets: ['latin', 'cyrillic-ext'] });

export const theme: ThemeConfig = {
  token: {
    borderRadius: 0,
    colorPrimary: '#2ebaae',
    colorTextSecondary,
    colorText: '#3c3b3b',
    fontFamily: raleway.style.fontFamily,
    colorBorder,
  },
  components: {
    Button: {
      fontSizeLG: 12,
      boxShadow: undefined,
    },
    Typography: {
      fontSizeHeading2: 20,
    },
    Layout: {
      colorBgHeader: '#fff',
    },
    Input: {
      fontFamily: sourceSans3.style.fontFamily,
    },
  },
};
