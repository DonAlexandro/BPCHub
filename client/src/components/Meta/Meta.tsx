import { FC, PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import { MetaProps } from './interface';

export const Meta: FC<PropsWithChildren<MetaProps>> = ({ title }) => {
  return (
    <Helmet>
      <title>{title ? `БФК | ${title}` : 'Бережанський фаховий коледж'}</title>
    </Helmet>
  );
};
