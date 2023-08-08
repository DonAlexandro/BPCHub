import type { ThemeConfig } from 'antd';
import { colorBorder, colorTextSecondary, mainFont, secondaryFont } from '.';

export const theme: ThemeConfig = {
  token: {
    borderRadius: 0,
    colorPrimary: '#2ebaae',
    colorTextSecondary,
    colorText: '#3c3b3b',
    fontFamily: mainFont.style.fontFamily,
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
      fontFamily: secondaryFont.style.fontFamily,
    },
  },
};
