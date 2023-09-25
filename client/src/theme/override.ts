import type { ThemeConfig } from 'antd';
import { colorBorder, colorSecondary, mainFont, secondaryFont } from '.';

export const theme: ThemeConfig = {
  hashed: false,
  token: {
    borderRadius: 0,
    colorPrimary: '#2ebaae',
    colorTextSecondary: colorSecondary,
    colorText: '#3c3b3b',
    fontFamily: mainFont.style.fontFamily,
    colorBorder,
  },
  components: {
    Layout: {
      colorBgHeader: '#fff',
    },
    Input: {
      fontFamily: secondaryFont.style.fontFamily,
    },
  },
};
