import type { ThemeConfig } from 'antd';
import { Raleway, Source_Serif_4 } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin', 'cyrillic-ext'] });
const sourceSerif4 = Source_Serif_4({ subsets: ['latin', 'cyrillic-ext'] });

export const theme: ThemeConfig = {
  token: {
    borderRadius: 0,
    colorPrimary: '#2ebaae',
    colorTextSecondary: '#646464',
    colorText: '#3c3b3b',
    fontFamily: raleway.style.fontFamily,
    colorBorder: 'rgba(160, 160, 160, 0.3)',
  },
  components: {
    Button: {
      fontSizeLG: 12,
      boxShadow: undefined,
    },
    Typography: {
      fontSizeHeading2: 20,
    },
    Card: {
      fontFamily: sourceSerif4.style.fontFamily,
    },
  },
};
