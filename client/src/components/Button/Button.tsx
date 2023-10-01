import { ButtonProps } from 'antd';
import { FC, PropsWithChildren } from 'react';
import Styled from './button.styled';

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  return <Styled.Button size="large" {...props} />;
};
