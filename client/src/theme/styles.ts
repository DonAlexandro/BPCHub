import { Raleway, Source_Sans_3 } from 'next/font/google';

export const headingLink: React.CSSProperties = {
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '0.25em',
  fontWeight: 800,
};

export const colorPrimary = '#2ebaae';
export const colorSecondary = '#646464';
export const colorBorder = 'rgba(160, 160, 160, 0.3)';
export const paragraphColor = 'rgb(100, 100, 100)'
export const colorMuted = 'rgb(170, 170, 170)'

export const secondaryLink: React.CSSProperties = {
  color: colorSecondary,
  textTransform: 'uppercase',
  letterSpacing: '0.25em',
  borderBottom: `1px dotted ${colorBorder}`,
};

export const mainFont = Raleway({ subsets: ['latin', 'cyrillic-ext'] });
export const secondaryFont = Source_Sans_3({ subsets: ['latin', 'cyrillic-ext'] });
